<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\OrderDetails;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductStock;
use App\Models\ProductVariant;
use App\Models\ProductVariantPrice;
use App\Models\User;
use App\Models\Variation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index(Request $request)
    {

        return Product::query()->with(['product_variants', 'productVariationOptions'])->get();

        $title = $request->title;
        $variant = $request->variant;
        $price_from = $request->price_from;
        $price_to = $request->price_to;
        $date = $request->date;

        $vp = [$price_from, $price_to, $variant];
        $product_variants = ProductVariant::all();

        $products = Product::with(['product_variants', 'product_variants'])
            ->when($title, function ($query, $title) {
                return $query->where('title', 'like', '%' . $title . '%');
            })
            ->when($date, function ($query, $date) {
                return $query->whereDate('created_at', $date);
            })->whereHas('prices', function ($q) use ($vp) {
                $price_from = $vp[0];
                $price_to = $vp[1];
                $variant = $vp[2];

                $q->when($price_from, function ($query, $price_from) {
                    return $query->where('price', '>=', intval($price_from));
                })->when($price_to, function ($query, $price_to) {
                    return $query->where('price', '<=', intval($price_to));
                })->when($variant, function ($query, $variant) {
                    return $query->whereRaw("(product_variant_1 = $variant or product_variant_2 = $variant or product_variant_3 = $variant)");
                });

            })->get(); //->paginate(2);
        return $products;


        return response()->json(Product::with('category')->with('supplier')->get());
    }

    public function store(Request $request)
    {
        $file = $request->photo;
        $fileName = time() . rand(0000, 9999) . '.' . $file->getClientOriginalExtension();
        $file->storeAs('public/productImage/', $fileName);

        $images = [];
        foreach ($request->images as $singImage) {
            $imageName = time() . rand(0000, 9999) . '.' . $singImage->getClientOriginalExtension();
            $singImage->storeAs('public/productImages/', $imageName);
            $images[] = [
                'name' => 'storage/productImages/' . $imageName,
            ];
        }
        $data = $request->all();
        $data['slug'] = Str::slug($request->title);
        $data['photo'] = 'storage/productImage/' . $fileName;
        $product = Product::create($data);
        $product->images()->createMany($images);

        return response()->json(['message' => 'Product save successfully done.'], 200);

    }

    public function show($id)
    {
        $product = Product::query()->with(['stocks', 'category', 'brand', 'images'])->findOrFail($id);

        $varients = json_decode($product->variationOptions, true);

        $attributes = array_map(function($item){
            $item["option"] = Variation::select('name', 'id')->findOrFail($item["option"]);
            $item["selectVariant"] = $item['tags'][0];
            return $item;
        }, $varients ?? []);

        $product->attributes = $attributes ?? [];

        $product->showPrice = showPrices($product);
        $product->currency = get_setting('currency');
        $product->currencySymble = get_setting('currency_symbol');

        return response()->json($product);
    }




    public function variant_price(Request $request)
    {
        $product = Product::find($request->id);
        $str = '';
        $quantity = 0;

        if ($request->has('color')) {
            $str = $request['color'];
        }

        if (json_decode(Product::find($request->id)->variationOptions) != null) {
            foreach (json_decode(Product::find($request->id)->variationOptions) as $key => $choice) {
                if ($str != null) {
                    $str .= '-' . str_replace(' ', '', $request['attribute_id_' . $choice->attribute_id]);
                } else {
                    $str .= str_replace(' ', '', $request['attribute_id_' . $choice->attribute_id]);
                }
            }
        }

        if ($str != null && $product->variant_product) {
            $product_stock = $product->stocks->where('variant', $str)->first();
            $price = $product_stock->price;
            $quantity = $product_stock->qty;
        } else {
            $price = $product->unit_price;
            $quantity = $product->current_stock;
        }



        return array('price' => formatPrice($price * $request->quantity), 'quantity' => $quantity, 'variation' => $str);
    }




    public function update(Request $request, Product $product)
    {

        $product->update([
            'title' => $request->name,
            'buying_price ' => $request->defaultPrice,
            'description' => $request->description,
            'details' => $request->details,
            'stock' => $request->defaultQty,
            'category_id' => $request->categoryId,
            'brand_id' => $request->brandId,
            'user_id' => 1,
        ]);

        return response()->json(['message' => 'Product updated successfully done.'], 200);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Product delete successfully done.'], 200);
    }

    public function productByCategory($id)
    {
        $products = Product::where('cat_id', $id)->get();
        return response()->json($products);
    }


    public function checkVarient(Request $request)
    {



        $variationOptions = [];
        foreach ($request->variations as $key => $variation) {
            $variationMake = [];
            $variationIds = explode('/', $variation["variationId"], '-1');
            foreach ($variationIds as $singleVariation) {
                $variationMake[] = ['variant_id' =>intval($singleVariation)];
            }

            $variationOptions[] = [
                'variationId' => $variationIds,
                'variationOpId' => $variation["variationOptionId"],
                'price' => $variation["price"],
                'stock' =>$variation["stock"],
                'sku' =>$variation["sku"],
            ] ;
        }
        $newArray = [];
        foreach ($variationOptions as $item) {
            foreach ($item['variationId'] as $key => $variationId) {
                $newArray[] = [
                    'variant_id' => $variationId,
                    'variation_option_id' => explode('/', $item['variationOpId'])[$key],
                    'price' => $item['price'],
                    'stock' => $item['stock'],
                    'sku' => $item["sku"],
                ];
            }
        }


        $product->product_variants()->createMany($variationMake);
        $product->productVariationOptions()->attach($newArray);

        return $product->load(['product_variants', 'productVariationOptions:id,pivot']);

//        $optionValidForSave = [];
//        foreach ($variationOptions as $key => $opItem){
//            $vId = $opItem["variationId"][$key];
//            foreach (explode('/', $opItem["variationOpId"], '-1') as $item){
//                $optionValidForSave[] = [
//                  'variant_id' => $vId,
//                  'variation_option_id' => intval($item),
//                  'price' => intval($opItem["price"]),
//                  'stock' => intval($opItem["stock"])
//                ];
//            }
//        }
//        return $variationOptions;
//        $newArray = [];
//        $uniqueEntries = [];
//        foreach ($variationOptions as $item) {
//            foreach ($item['variationId'] as $key => $variationId) {
//                $combination = $variationId . '-' . explode('/', $item['variationOpId'])[$key];
//                if (!in_array($combination, $uniqueEntries)) {
//                    $newArray[] = [
//                        'variation_id' => $variationId,
//                        'variationOpId' => explode('/', $item['variationOpId'])[$key],
//                        'price' => $item['price'],
//                        'stock' => $item['stock'],
//                    ];
//                    $uniqueEntries[] = $combination;
//                }
//            }
//        }
//
//        return $newArray;
//        [
//            0:{variationId: ["6", "7"], variationOpId: "26/32/", price: 120, stock: 13}
//            1:{variationId: ["6", "7"], variationOpId: "26/33/", price: 120, stock: 13}
//            2:{variationId: ["6", "7"], variationOpId: "27/32/", price: 120, stock: 13}
//            3:{variationId: ["6", "7"], variationOpId: "27/33/", price: 120, stock: 13}
//        ]
//
//        make this array from this array
//
//        [
//            0:{$variation_id: 6, variationOpId:26, price: 120, stoke: 13},
//            1:{$variation_id: 7, variationOpId:27, price: 120, stoke: 13},
//            2:{$variation_id: 6, variationOpId:26, price: 120, stoke: 13},
//            3:{$variation_id: 7, variationOpId:33, price: 120, stoke: 13},
//            4:{$variation_id: 6, variationOpId:27, price: 120, stoke: 13},
//            5:{$variation_id: 7, variationOpId:23, price: 120, stoke: 13},
//            5:{$variation_id: 6, variationOpId:27, price: 120, stoke: 13},
//            5:{$variation_id: 7, variationOpId:33, price: 120, stoke: 13},
//
//        ]
//            $mainOptionArr[] = explode('/', $variation["variationOptionId"], '-1');
//            $uniqueArrayOptions = array_unique(array_merge(...$mainOptionArr));
//
//            // variation options
//            foreach ($uniqueArrayOptions as $singleVariationOption) {
//                $variationOptions[] = [
//                    'variation_option_id' => intval($singleVariationOption),
//                    'price' => $variation["price"],
//                    'stock' => $variation["stock"]
//                ];
//            }
//        foreach ($variations as $key => $value){
//            $data[] =[
//                'variant_id' => $value->id,
//                ...$variationMake["varOp"][$key]
//            ];
//        }

    }

    /*
        public function checkVarient(Request $request)
        {
            $product = Product::create(['title' => $request->title, 'sku' => $request->sku, 'description' =>$request->description]);

    //        $product_image = new ProductImage();
    //        if($request->hasFile('product_image')){
    //            foreach($request->file('product_image') as $img){
    //                $file = $img;
    //                $filename = time().'-'.uniqid().'.'.$file->getClientOriginalExtension();
    //                $file->move(public_path('uploads/products'), $filename);
    //                // save filename to database
    //                $product_image->create(['product_id' => $product->id, 'file_path' => $filename]);
    //            }
    //        }

            $product_variant = new ProductVariant();
            foreach($request->product_variant as $variant){
                $variant = json_decode($variant);
                foreach($variant->tags as $tag){
                    $product_variant->create([
                        'variant'=>$tag,
                        'variant_id'=>$variant->option,
                        'product_id'=>$product->id
                    ]);
                }
            }

            foreach($request->product_variant_prices as $price){
                $pv_prices = new ProductVariantPrice();
                $price = json_decode($price);
                $attrs = explode("/", $price->title);

                $product_variant_ids= [];
                for( $i=0; $i<count($attrs)-1; $i++){
                    $product_variant_ids[] = ProductVariant::select('id')->where('variant', $attrs[$i])->latest()->first()->id;
                }

                for( $i=1; $i<=count($product_variant_ids); $i++){
                    $pv_prices->{'product_variant_'.$i} = $product_variant_ids[$i-1];
                }
                $pv_prices->price = $price->price;
                $pv_prices->stock = $price->stock;
                $pv_prices->product_id = $product->id;
                $pv_prices->save();
            }

            return back();
        }*/


    public function saveProductDetails(Request $request)
    {
        Product::query()->create([
            'title' => $request->name,
            'buying_price ' => $request->defaultPrice,
            'description' => $request->description,
            'details' => $request->details,
            'stock' => $request->defaultQty,
            'category_id' => $request->categoryId,
            'brand_id' => $request->brandId,
            'user_id' => 1,
        ]);
        return response()->json(['message' => 'Product updated successfully done.'], 200);
    }

    public function saveProductVariations(Request $request)
    {
        $variationIds = collect($request->varArray)->map(fn($item) => $item['option']);
        $product = Product::findOrFail($request->input('productId'));
        $product->variations = json_encode($variationIds);
        $product->variationOptions = json_encode($request->varArray);
        $product->save();

        $array =  collect($request->variations)->map(function($item){
            $item['product_id'] = 1;
            $item['varient'] = $item['title'];
            $item['qty'] = $item['stock'];
            return $item;
        });

        $product->stocks()->createMany($array);
        return response()->json(['message' => 'Product variations save successfully done.'], 200);


        /*        $variationOptions = [];
        foreach ($request->variations as $key => $variation) {
            $variationMake = [];
            $variationIds = explode('/', $variation["variationId"], '-1');
            foreach ($variationIds as $singleVariation) {
                $variationMake[] = ['variant_id' =>intval($singleVariation)];
            }

            $variationOptions[] = [
                'variationId' => $variationIds,
                'variationOpId' => $variation["variationOptionId"],
                'price' => $variation["price"],
                'stock' =>$variation["stock"] ?? 0,
                'sku' =>$variation["sku"],
            ] ;
        }
        $newArray = [];
        foreach ($variationOptions as $item) {
            foreach ($item['variationId'] as $key => $variationId) {
                $newArray[] = [
                    'variant_id' => $variationId,
                    'variation_option_id' => explode('/', $item['variationOpId'])[$key],
                    'price' => $item['price'],
                    'stock' => $item['stock'] ?? 0,
                    'sku' => $item["sku"],
                ];
            }
        }
        $product->product_variants()->createMany($variationMake);
        $product->productVariationOptions()->attach($newArray);*/

    }

    public function saveProductImages(Request $request){

        $product = Product::findOrFail($request->input('productId'));
        $images = $request->file('files');
        $uploadedFiles = [];
        foreach ($images as $file) {
            $fileName = time() . '_' . $file->getClientOriginalName();
            $file->storeAs('uploads', $fileName, [
                'disk' => 'public'
            ]);
            $uploadedFiles[] = [
                'image' => $fileName
            ];
        }

//        return $uploadedFiles;

        $product->images()->createMany($uploadedFiles);

        return response()->json(['message' => 'Product variations save successfully done.'], 200);
    }


    public function variationsProducts()
    {
//        return Product::query()->with(['images', 'stocks'])->get()->map(function ($product) {
//            $product->images->each(function ($image) {
//                $image->url = Storage::url("uploads/$image->image");
//            });
//            return $product;
//        });

        return Product::query()
            ->with(['images', 'stocks'])
            ->withCount('orderDetails')
            ->orderByDesc('order_details_count')
            ->take(10)
            ->get()->map(function ($product) {
                $product->images->each(function ($image) {
                    $image->url = Storage::url("uploads/$image->image");
                });
                return $product;
            });
    }

    public function stokeProducts()
    {
        $stokes = ProductStock::query()->with(['product.category'])->paginate(20);
        return response()->json($stokes, 200);
    }


    public function updateStoke(Request $request, $id){
        $stoke = ProductStock::query()->findOrFail($id);

        $stoke->qty += $request->input("qty");
        $stoke->update();

        return response()->json(['message' => 'Product Stoke Added.....'], 200);

    }


    public function posProducts()
    {
        $stokes = ProductStock::query()->with(['product.category', 'product.images'])->get();
        $stokes->each(function ($stock) {
            $stock->product->images->each(function ($image) {
                $image->url = Storage::url("uploads/$image->image");
            });
        });

//        Cache::store('posProducts', )

        return response()->json($stokes, 200);
    }


    public function filterProduct(Request $request){

        $products = Product::query()
            ->with(['images', 'stocks', 'category'])
            ->when(\Illuminate\Support\Facades\Request::input('category'), function ($query, $search){
                $query->whereHas('category', function ($query)use($search){
                    $query->where('id', $search);
                });
            })
            ->when(\Illuminate\Support\Facades\Request::input('priceRange'), function ($query, $search){
                $query->whereBetween('price', [$search['min'], $search['max']]);
            })
            ->when(\Illuminate\Support\Facades\Request::input('orderBy'), function ($query, $search) {
                if ($search === 'price_low_high'){
                    $query->orderBy('price', 'asc');
                }
                if ($search === 'price_high_low'){
                    $query->orderBy('price', 'desc');
                }
                if ($search === 'newest_first'){
                    $query->orderBy('created_at', 'desc');
                }
                if ($search === 'oldest_first'){
                    $query->orderBy('created_at', 'asc');
                }
            })
            ->when(\Illuminate\Support\Facades\Request::input('search'), function ($query, $search){
                $query->where('title', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(\Illuminate\Support\Facades\Request::input('perPage') ?? 30)
            ->withQueryString()
            ->through(fn($product) => $product);

        $products->each(function($product) {
            $product->images->map(function($image) {
                $image->url = Storage::url("uploads/$image->image");
                return $image;
            });
        });
        return response()->json($products, 200);



//        $products = Product::with(['images', 'stocks', 'category'])
//        ->when($request->input('category'), function($query, $search){
//            $query->where('category_id', $search);
//        })
//        ->when($request->input('search'), function($query, $search){
//            $query->where('title',  'like', "%{$search}%")
//            ->orWhere('title',  'like', "%{$search}%")
//            ->orWhere('description',  'like', "%{$search}%")
//            ->orWhereHas('stocks', function($query)use($search){
//                $query->where('varient',  'like', "%{$search}%");
//            });
//        })
//        ->paginate($request->input('perPage') ?? 15);
//        $products->each(function($product) {
//            $product->images->map(function($image) {
//                $image->url = Storage::url("uploads/$image->image");
//                return $image;
//            });
//        });
//
//        return response()->json($products, 200);
    }



}
