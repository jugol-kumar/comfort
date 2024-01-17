import{_ as x}from"./TreeCategory-yXiW4ULw.js";import{_ as P,U,r as I,c as r,a as t,n as f,b as h,v as m,g as w,h as v,F as b,i as y,o as n,j as S,t as C,p as T,d as D}from"./app-_aaoa6OJ.js";const L={name:"Index",components:{TreeCategory:x,Uploader:U},data(){return{currentTab:"details",variationDivider:"/",varientSkuPrefix:"Ver-",defaultQty:13,productName:null,defaultPrice:null,defaultStoke:null,description:null,details:null,categoryId:1,brandId:null,images:[],variants:[],product_variant:[{option:1,tags:[]}],product_variant_prices:[],variationValues:[],content:null,editorOption:{},brands:[]}},methods:{initImages(s){console.log(s)},changeMedia(s){this.images=s},setActiveTab(s){this.currentTab=s},changeVariation(s){var e;this.variationValues[s]=(e=this.variants.find(l=>l.id===parseInt(event.target.value)))==null?void 0:e.variation_options},removeItem(s){var e;(e=this.product_variant)==null||e.splice(s,1),this.checkVariant()},newVariant(){let s=this.variants.map(c=>c.id),e=this.product_variant.map(c=>c.option),l=s.filter(c=>!e.some(a=>c==a));this.product_variant.push({option:l[0],tags:[]})},checkVariant(){let s=[];this.product_variant_prices=[],this.product_variant.filter(e=>{s.push(e.tags),console.log(e)}),this.getCombn(s).forEach(e=>{this.product_variant_prices.push({title:e,price:0,stock:0})})},getCombn(s,e){if(e=e||"",!s.length)return e;let l=this;return s[0].reduce(function(a,i){return a.concat(l.getCombn(s.slice(1),e+i+"/"))},[])},allVerients(){this.$axios.get("api/varients",this.from).then(s=>{this.variants=s.data,Toast.fire({icon:"success",title:"Ready For Product Create..."})}).catch(s=>{this.errors=s.response.data.errors,Toast.fire({icon:"warning",title:s.response.data.message})})},allBrands(){this.$axios.get("/api/brand",this.from).then(s=>{this.brands=s.data}).catch(s=>{this.errors=s.response.data.errors,Toast.fire({icon:"warning",title:s.response.data.message})})},updateProductDetails(){const s=new FormData;s.append("name",this.productName),s.append("defaultPrice",this.defaultPrice),s.append("defaultQty",this.defaultStoke),s.append("categoryId",this.categoryId),s.append("brandId",this.brandId),s.append("description",this.description),s.append("details",this.details),s.append("stock",this.defaultStoke);const e={name:this.productName,defaultPrice:this.defaultPrice,defaultQty:this.defaultStoke,categoryId:this.categoryId,brandId:this.brandId,description:this.description,details:this.details,stock:this.defaultStoke};this.$axios.put(`/api/product/${this.$route.params.id}`,e).then(l=>{Toast.fire({icon:"success",title:l.data.message}),this.$refs.Close.click(),this.allProducts()}).catch(l=>{console.log(l)})},saveVariation(){this.$axios.post("/api/save-product-variations",{variations:this.product_variant_prices,varArray:this.product_variant,productId:this.$route.params.id}).then(s=>{console.log(s.data)}).catch(s=>{console.log(s)})},saveImages(){const s=new FormData;for(let e=0;e<this.images.length;e++)s.append(`files[${e}]`,this.images[e].file);s.append("productId",this.$route.params.id),this.$axios.post("/api/save-product-images",s).then(e=>{console.log(e.data)}).catch(e=>{console.log(e)})},handleFileChange(s){for(let e=0;e<s.target.files.length;e++)this.images.push({url:URL.createObjectURL(s.target.files[e]),file:s.target.files[e]});console.log(this.images)},async fileChange(s){this.isLoading=!0;let e=s.target.files;for(var l=0;l<e.length;l++){let c=URL.createObjectURL(e[l]);e[l].name,e[l].size,e[l].type}},removeMedia(s){let e=this.images[s];e.url.startsWith("blob:")&&URL.revokeObjectURL(e.url),this.images.splice(s,1)},getProduct(){this.$axios.get(`/api/product/${this.$route.params.id}`).then(s=>{var e,l,c,a,i,k,_,g,o;console.log(s.data),this.productName=(e=s.data)==null?void 0:e.title,this.defaultPrice=(l=s.data)==null?void 0:l.selling_price,this.defaultStoke=(c=s.data)==null?void 0:c.stok,this.description=(a=s.data)==null?void 0:a.description,this.details=(i=s.data)==null?void 0:i.details,this.categoryId=(_=(k=s.data)==null?void 0:k.category)==null?void 0:_.id,this.brandId=(o=(g=s.data)==null?void 0:g.brand)==null?void 0:o.id}).catch(s=>{console.log(s)})}},created(){this.allVerients(),this.allBrands(),this.getProduct()}},d=s=>(T("data-v-5a42882a"),s=s(),D(),s),F={class:"row"},A={class:"col-md-3 d-flex flex-column gap-2"},N=d(()=>t("div",{class:"card-body p-4"}," Product Details ",-1)),R=[N],M=d(()=>t("div",{class:"card-body p-4"}," Product Variants ",-1)),B=[M],z=d(()=>t("div",{class:"card-body p-4"}," Product Images ",-1)),O=[z],Q=d(()=>t("div",{class:"card-body p-4"}," Action ",-1)),j=[Q],E={class:"col-md-9"},Y={key:0,class:"card"},H={class:"card-header d-flex gap-2"},W=d(()=>t("h3",{class:"card-title m-0"},"Product Details",-1)),q={class:"card-body"},G={class:"form-row"},J={class:"col-md-4 form-group"},K=d(()=>t("label",{for:"productname"},"Product Name",-1)),X={class:"col-md-4 form-group"},Z=d(()=>t("label",{for:"dPrice"},"Default Price",-1)),$={class:"col-md-4 form-group"},tt=d(()=>t("label",{for:"defaultStoke"},"Default Quantity",-1)),et={class:"form-row"},st={class:"col-md-6 form-group"},ot=d(()=>t("label",null,"Category",-1)),at={class:"col-md-6 form-group"},it=d(()=>t("label",null,"Brand",-1)),lt={class:"form-group"},rt=d(()=>t("label",{for:"description"},"Description",-1)),nt=d(()=>t("div",{class:"form-group"},[t("label",null,"Full Details")],-1)),dt={key:1,class:"card"},ct={class:"card-header py-3 d-flex flex-row align-items-center gap-2"},ut=d(()=>t("h3",{class:"m-0 font-weight-bold text-primary"},"Variants",-1)),pt={key:0,class:"card-body"},ht={class:"row"},mt={class:"col-md-4"},vt={class:"form-group"},_t=d(()=>t("label",{for:"variation"},"Option",-1)),gt=["onUpdate:modelValue","onChange"],ft=["value"],bt={class:"col-md-8"},yt={class:"form-group"},kt=["onClick"],Vt={key:1},wt={class:"container mt-5"},Ct={class:"selectpicker",multiple:"","aria-label":"Default select example","data-live-search":"true"},It=["value"],xt={key:1,class:"card-footer"},Pt=d(()=>t("div",{class:"card-header text-uppercase"},"Preview",-1)),Ut={class:"card-body"},St={class:"table-responsive"},Tt={class:"table"},Dt=d(()=>t("thead",null,[t("tr",null,[t("td",null,"Variant"),t("td",null,"Price"),t("td",null,"Stock"),t("td",null,"Sku Id")])],-1)),Lt={key:0},Ft=["onUpdate:modelValue"],At=["onUpdate:modelValue"],Nt=["onUpdate:modelValue"],Rt={key:2,class:"card"},Mt={class:"card-body"},Bt={class:"card-header py-3 d-flex flex-row align-items-center gap-2"},zt=d(()=>t("h2",{class:"card-title"},"Product Images",-1)),Ot={class:"mu-elements-wraper"},Qt=["src"],jt=["onClick"],Et=d(()=>t("svg",{class:"mu-times-icon",xmlns:"http://www.w3.org/2000/svg",width:"0.65em",height:"0.65em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 352 512"},[t("path",{d:"m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",fill:"currentColor"})],-1)),Yt=[Et],Ht={class:"mu-plusbox-container"},Wt=d(()=>t("label",{for:"mu-file-input",class:"mu-plusbox"},[t("svg",{class:"mu-plus-icon",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[t("g",{fill:"none"},[t("path",{d:"M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm1 15a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3z",fill:"currentColor"})])])],-1)),qt={key:3,class:"card"},Gt={class:"card-body d-flex gap-2"},Jt=d(()=>t("button",{class:"btn btn-lg btn-danger"},"Reset Form",-1));function Kt(s,e,l,c,a,i){var g;const k=I("TreeCategory"),_=I("v-select");return n(),r("section",null,[t("div",F,[t("div",A,[t("div",{class:f(["card cursor-pointer",{"bg-primary text-white fw-bolder":a.currentTab==="details"}]),onClick:e[0]||(e[0]=o=>i.setActiveTab("details"))},R,2),t("div",{class:f(["card cursor-pointer",{"bg-primary text-white fw-bolder":a.currentTab==="variants"}]),onClick:e[1]||(e[1]=o=>i.setActiveTab("variants"))},B,2),t("div",{class:f(["card cursor-pointer",{"bg-primary text-white fw-bolder":a.currentTab==="images"}]),onClick:e[2]||(e[2]=o=>i.setActiveTab("images"))},O,2),t("div",{class:f(["card cursor-pointer",{"bg-primary text-white fw-bolder":a.currentTab==="seo"}]),onClick:e[3]||(e[3]=o=>i.setActiveTab("seo"))},j,2)]),t("div",E,[a.currentTab==="details"?(n(),r("div",Y,[t("div",H,[W,t("button",{class:"btn btn-primary btn-sm",onClick:e[4]||(e[4]=(...o)=>i.updateProductDetails&&i.updateProductDetails(...o))},"Update Info")]),t("div",q,[t("div",null,[t("div",G,[t("div",J,[K,h(t("input",{type:"text",id:"productname","onUpdate:modelValue":e[5]||(e[5]=o=>a.productName=o),placeholder:"Product Name",class:"form-control"},null,512),[[m,a.productName]])]),t("div",X,[Z,h(t("input",{type:"text",id:"dPrice","onUpdate:modelValue":e[6]||(e[6]=o=>a.defaultPrice=o),placeholder:"Default Price.",class:"form-control"},null,512),[[m,a.defaultPrice]])]),t("div",$,[tt,h(t("input",{type:"text",id:"defaultStoke","onUpdate:modelValue":e[7]||(e[7]=o=>a.defaultStoke=o),placeholder:"Default Quantity...",class:"form-control"},null,512),[[m,a.defaultStoke]])])]),t("div",et,[t("div",st,[ot,w(k,{modelValue:a.categoryId,"onUpdate:modelValue":e[8]||(e[8]=o=>a.categoryId=o)},null,8,["modelValue"])]),t("div",at,[it,w(_,{modelValue:a.brandId,"onUpdate:modelValue":e[9]||(e[9]=o=>a.brandId=o),reduce:o=>o.id,options:a.brands,label:"title",placeholder:"Select Brand..."},null,8,["modelValue","reduce","options"])])]),t("div",lt,[rt,h(t("textarea",{"onUpdate:modelValue":e[10]||(e[10]=o=>a.description=o),id:"description",cols:"30",rows:"4",class:"form-control"},null,512),[[m,a.description]])]),nt])])])):v("",!0),a.currentTab==="variants"?(n(),r("div",dt,[t("div",ct,[ut,t("button",{class:"btn btn-primary btn-sm",onClick:e[11]||(e[11]=(...o)=>i.saveVariation&&i.saveVariation(...o))},"Save Variations")]),a.product_variant.length>0?(n(),r("div",pt,[(n(!0),r(b,null,y(a.product_variant,(o,u)=>{var V;return n(),r("div",ht,[t("div",mt,[t("div",vt,[_t,h(t("select",{id:"variation","onUpdate:modelValue":p=>o.option=p,onChange:p=>i.changeVariation(u),class:"form-control"},[(n(!0),r(b,null,y(a.variants,p=>(n(),r("option",{value:p.id},C(p.name),9,ft))),256))],40,gt),[[S,o.option]])])]),t("div",bt,[t("div",yt,[((V=a.product_variant)==null?void 0:V.length)!==1?(n(),r("label",{key:0,onClick:p=>i.removeItem(u),class:"float-right text-primary",style:{cursor:"pointer"}},"Remove",8,kt)):(n(),r("label",Vt,".")),t("div",wt,[t("select",Ct,[(n(!0),r(b,null,y(a.variationValues[u],p=>(n(),r("option",{value:p},C(p.name),9,It))),256))])]),w(_,{modelValue:o.tags,"onUpdate:modelValue":[p=>o.tags=p,i.checkVariant],label:"name",multiple:"",taggable:"",placeholder:"Select Variation Options..."},null,8,["modelValue","onUpdate:modelValue"])])])])}),256))])):v("",!0),((g=a.product_variant)==null?void 0:g.length)<a.variants.length?(n(),r("div",xt,[t("button",{onClick:e[12]||(e[12]=o=>i.newVariant()),class:"btn btn-primary"},"Add another option")])):v("",!0),Pt,t("div",Ut,[t("div",St,[t("table",Tt,[Dt,a.product_variant_prices.length>0?(n(),r("tbody",Lt,[(n(!0),r(b,null,y(a.product_variant_prices,o=>(n(),r("tr",null,[t("td",null,C(o.title),1),t("td",null,[h(t("input",{type:"number",class:"form-control","onUpdate:modelValue":u=>o.price=u},null,8,Ft),[[m,o.price]])]),t("td",null,[h(t("input",{type:"number",class:"form-control","onUpdate:modelValue":u=>o.stock=u},null,8,At),[[m,o.stock]])]),t("td",null,[h(t("input",{type:"text",class:"form-control","onUpdate:modelValue":u=>o.sku=u},null,8,Nt),[[m,o.sku]])])]))),256))])):v("",!0)])])])])):v("",!0),a.currentTab==="images"?(n(),r("div",Rt,[t("div",Mt,[t("div",Bt,[zt,t("button",{class:"btn btn-primary btn-sm",onClick:e[13]||(e[13]=(...o)=>i.saveImages&&i.saveImages(...o))},"Save Variations")]),t("div",{class:f(["mu-container",s.isInvalid?"mu-red-border":""])},[t("div",Ot,[(n(!0),r(b,null,y(a.images,(o,u)=>(n(),r("div",{key:u,class:"mu-image-container"},[t("img",{src:o.url,alt:"",class:"mu-images-preview"},null,8,Qt),t("button",{onClick:V=>i.removeMedia(u),class:"mu-close-btn",type:"button"},Yt,8,jt)]))),128)),t("div",Ht,[Wt,t("input",{onChange:e[14]||(e[14]=(...o)=>i.handleFileChange&&i.handleFileChange(...o)),id:"mu-file-input",type:"file",accept:"image/*",multiple:"",hidden:""},null,32)])])],2),t("div",null,[t("input",{type:"file",ref:"fileInput",multiple:"",onChange:e[15]||(e[15]=(...o)=>i.handleFileChange&&i.handleFileChange(...o))},null,544),t("button",{onClick:e[16]||(e[16]=(...o)=>s.uploadFiles&&s.uploadFiles(...o))},"Upload")])])])):v("",!0),a.currentTab==="seo"?(n(),r("div",qt,[t("div",Gt,[t("button",{class:"btn btn-lg btn-primary",onClick:e[17]||(e[17]=(...o)=>s.saveProduct&&s.saveProduct(...o))},"Save Product"),Jt])])):v("",!0)])])])}const $t=P(L,[["render",Kt],["__scopeId","data-v-5a42882a"]]);export{$t as default};
