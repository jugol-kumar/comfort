import{aQ as r,_ as ue,bH as ve,z as ee,aE as he,aV as _e,c as m,a as e,F as Q,aT as V,bg as y,e as w,b7 as i,H as me,w as pe,P as te,b as se,br as ye,v as be,G as fe,o as u,p as ge,d as we,O as I}from"./app-ZJ2UjalZ.js";import{_ as xe}from"./TreeCategory-Ygb9dLl0.js";import{C as Ce}from"./ComponentLoader-v4UpLI7l.js";function ke(){let a=r([]);const x=async s=>{const l=a.value.findIndex(c=>(c==null?void 0:c.id)===(s==null?void 0:s.id));l>-1?a.value[l].buyQty<a.value[l].qty?(a.value[l].buyQty++,Toast.fire({icon:"success",title:"Quantity Updated..."})):Toast.fire({icon:"warning",title:"Max Quantity exist..."}):(a.value.push(s),Toast.fire({icon:"success",title:"Added To Pos..."})),await _()},M=async s=>{const l=a.value.findIndex(c=>(c==null?void 0:c.id)===s);l>-1&&(a.value[l].buyQty<a.value[l].qty?(console.log("buy qty",a.value[l].buyQty),console.log("main qty",a.value[l].qty),a.value[l].buyQty++,Toast.fire({icon:"success",title:"Quantity Updated..."})):Toast.fire({icon:"warning",title:"Max Quantity exist..."})),await _()},P=async s=>{const l=a.value.findIndex(c=>(c==null?void 0:c.id)===s);l>-1&&(a.value[l].buyQty>1?(a.value[l].buyQty--,Toast.fire({icon:"success",title:"Quantity Updated..."})):Toast.fire({icon:"warning",title:"Min Quantity 1 ...."})),await _()},d=async s=>{const l=a.value.indexOf(s);l>-1&&(a.value.splice(l,1),Toast.fire({icon:"success",title:"Remove From Pos..."})),await _()},h=()=>{localStorage.removeItem("pos_cart"),a.value=[]},C=()=>{const s=localStorage.getItem("pos_cart");s&&(a.value=JSON.parse(s))},k=()=>a.value,f=()=>{let s=0;return a.value.map(l=>(s+=l.price*l.buyQty,s)),s},_=async()=>{localStorage.setItem("pos_cart",JSON.stringify(a.value))};return{addToCart:x,initCart:C,incrementQty:M,decrementQty:P,removeFromCart:d,getAllItems:k,getSubTotal:f,clearCart:h,cart:a}}const v=a=>(ge("data-v-6053ded8"),a=a(),we(),a),Te={class:"row match-height"},Le={class:"col-md-6"},Se={class:"card card-custom"},Qe=v(()=>e("div",{class:"card-header flex-wrap py-5"},[e("div",{class:"card-title"},[e("h3",{class:"card-label"},[w("Product Carts "),e("span",{class:"d-block text-muted pt-2 font-size-sm"},"all employees details is here")])])],-1)),$e={class:"card-body pos-card-body"},Ie={class:"table table-separate table-head-custom table-checkable",id:""},Me=v(()=>e("thead",{class:"pos-t-head"},[e("tr",null,[e("th",{style:{width:"30%"}},"Title"),e("th",null,"Qty"),e("th",null,"Unit"),e("th",null,"Total"),e("th",null,"Action")])],-1)),Pe=["onClick"],Ve=["onClick"],De=I('<span class="svg-icon svg-icon-md" data-v-6053ded8><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" data-v-6053ded8><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-6053ded8><rect x="0" y="0" width="24" height="24" data-v-6053ded8></rect><circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" data-v-6053ded8></circle><path d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z" fill="#000000" data-v-6053ded8></path></g></svg></span>',1),Ae=[De],Be=["onClick"],Ue=I('<span class="svg-icon svg-icon-md" data-v-6053ded8><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" data-v-6053ded8><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-6053ded8><rect x="0" y="0" width="24" height="24" data-v-6053ded8></rect><circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" data-v-6053ded8></circle><rect fill="#000000" x="6" y="11" width="12" height="2" rx="1" data-v-6053ded8></rect></g></svg></span>',1),Ne=[Ue],qe=["onClick"],ze=I('<span class="svg-icon svg-icon-md" data-v-6053ded8><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" data-v-6053ded8><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-6053ded8><rect x="0" y="0" width="24" height="24" data-v-6053ded8></rect><path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" data-v-6053ded8></path><path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" data-v-6053ded8></path></g></svg></span>',1),Oe=[ze],je={key:0,class:"pos-account"},Fe={class:"fw-bolder"},He={class:"card card-custom mt-5"},Re={class:"card-body"},Ze={class:"form-group"},Ee=v(()=>e("label",null,"Select Customer",-1)),Je={class:"form-group"},Ke=v(()=>e("label",null,"Payment Method",-1)),Ge=I('<option disabled="true" selected value="" data-v-6053ded8>~~ Select Payment Method~~</option><option value="han_cash" data-v-6053ded8>Han Cash</option><option value="bKash" data-v-6053ded8>bKash</option><option value="rocket" data-v-6053ded8>Rocket</option><option value="credit_card" data-v-6053ded8>Credit Card</option><option value="bank_check" data-v-6053ded8>Bank Check</option>',6),We=[Ge],Xe=v(()=>e("div",{class:"card-footer"},[e("button",{type:"submit",class:"btn btn-primary mr-2"},"Submit"),e("button",{type:"reset",class:"btn btn-secondary"},"Cancel")],-1)),Ye={class:"col-md-6"},et={class:"card card-custom"},tt=v(()=>e("div",{class:"card-header flex-wrap py-5"},[e("div",{class:"card-title"},[e("h3",{class:"card-label"},[w("All Products "),e("span",{class:"d-block text-muted pt-2 font-size-sm"},"all products with product details")])])],-1)),st={class:"card-body"},at={class:"example-preview"},ot={key:1,class:"tab-content mt-5 show-product-overflow",id:"myTabContent1"},lt={class:"tab-pane fade show active",id:"home-1",role:"tabpanel","aria-labelledby":"home-tab-1"},nt={class:"row match-height px-1"},dt=["onDblclick"],it={class:"card cursor-pointer"},ct={class:"card-body p-0 d-flex flex-column justify-content-between"},rt={class:"card-image"},ut=["src"],vt={class:"card-heading fw-bold"},ht={class:"card-text"},_t=["onClick"],mt={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},pt={class:"modal-dialog modal-lg"},yt={class:"modal-content"},bt={class:"modal-body"},ft={class:"row"},gt={class:"col-md-6"},wt={class:"row"},xt={class:"col-md-4"},Ct={class:"img-preview-scroll"},kt=["src"],Tt={class:"col-md-8"},Lt=["src"],St={class:"col-md-6"},Qt={class:"text-capitalize fw-bold"},$t={class:"text-capitalize"},It={class:"fw-bolder fs-2"},Mt={class:"row border-top mt-3"},Pt={class:"col-md-12"},Vt=v(()=>e("hr",null,null,-1)),Dt=v(()=>e("h3",null,"Desscription",-1)),At=v(()=>e("hr",null,null,-1)),Bt=v(()=>e("h3",null,"Desscription",-1)),Ut=["innerHTML"],Nt={__name:"Index",setup(a){const{sendRequest:x,loading:M,error:P}=ve(),d=ke(),h=r({customer:"",payby:""}),C=r([]),k=r([]),f=r(null),_=r(null),s=r([]);r([]),r([]),r(null),r([]);const l=async()=>{const o=await x("api/admin/pos-products");k&&(k.value=o)},c=async()=>{const o=await x("api/customer?onlyData");o&&(C.value=o)},ae=ee(()=>{let o=k.value;return f.value&&(o=o.filter(n=>{var b,p;return(p=(b=n==null?void 0:n.product)==null?void 0:b.title)==null?void 0:p.toLowerCase().includes(f.value)})),_.value&&(o=o.filter(n=>{var b,p;return((p=(b=n==null?void 0:n.product)==null?void 0:b.category)==null?void 0:p.id)===_.value})),o}),oe=o=>{d.addToCart({...o,buyQty:1})},le=()=>{d.addToCart({...s.value,buyQty:1}),$("#exampleModal").modal("hide")},ne=o=>{$("#exampleModal").modal("show"),s.value=o},de=async()=>{const o=await x({url:"api/pos",method:"POST",data:{...h.value,subTotal:d.getSubTotal(),products:d.getAllItems()}});o.message&&(d.clearCart(),h.value.customer="",h.value.payby="",Toast.fire({icon:"success",title:o.message}))},ie=o=>{console.log(o)};ee(()=>{let o=0;return d.getAllItems().map(n=>(o+=n.price*n.buyQty,o)),o});const ce=o=>{C.value.filter(n=>n.id===o)[0]};return he(()=>{l(),c(),d.initCart()}),(o,n)=>{var p,D,A,B,U,N,q,z,O,j,F,H,R,Z,E,J,K,G,W,X,Y;const b=_e("v-select");return u(),m(Q,null,[e("div",null,[e("div",Te,[e("div",Le,[e("div",Se,[Qe,e("div",$e,[e("table",Ie,[Me,e("tbody",null,[(u(!0),m(Q,null,V(y(d).getAllItems(),(t,T)=>{var L,S;return u(),m("tr",{key:`card-product-${T}`},[e("td",null,[e("a",{href:"#",onClick:g=>o.showSingleProduct(t.id)},i((S=(L=t==null?void 0:t.product)==null?void 0:L.title)==null?void 0:S.slice(0,10))+"...",9,Pe)]),e("td",null,[w(i(t.buyQty)+" ",1),e("a",{href:"javascript:void(0);",onClick:g=>y(d).incrementQty(t.id),class:"btn btn-sm btn-clean btn-icon",title:"Delete"},Ae,8,Ve),e("a",{href:"javascript:;",onClick:g=>y(d).decrementQty(t.id),class:"btn btn-sm btn-clean btn-icon",title:"Delete"},Ne,8,Be)]),e("td",null,i(t.price)+" $",1),e("td",null,i(t.price*(t==null?void 0:t.buyQty))+" $",1),e("td",null,[e("a",{href:"javascript:void(0)",onClick:g=>y(d).removeFromCart(t),class:"btn btn-sm btn-clean btn-icon",title:"Delete"},Oe,8,qe)])])}),128))])]),y(d).getSubTotal()>0?(u(),m("div",je,[w(" Total Items: "),e("h4",Fe,"Sub Total: "+i(y(d).getSubTotal())+" $",1)])):me("",!0)])]),e("div",He,[e("div",Re,[w(i((D=(p=y(P))==null?void 0:p.response)==null?void 0:D.data)+" ",1),e("form",{onSubmit:n[2]||(n[2]=pe(t=>de(),["prevent"]))},[e("div",Ze,[Ee,te(b,{options:C.value,class:"form-control form-control-solid",style:{padding:"0.375rem 0.75rem"},modelValue:h.value.customer,"onUpdate:modelValue":[n[0]||(n[0]=t=>h.value.customer=t),ce],reduce:t=>t.id,label:"full_name",placeholder:"Select Customer..."},null,8,["options","modelValue","reduce"])]),e("div",Je,[Ke,se(e("select",{class:"form-control form-control-solid","onUpdate:modelValue":n[1]||(n[1]=t=>h.value.payby=t)},We,512),[[ye,h.value.payby]])]),Xe],32)])])]),e("div",Ye,[e("div",et,[tt,e("div",st,[se(e("input",{type:"text","onUpdate:modelValue":n[3]||(n[3]=t=>f.value=t),class:"form-control form-control-solid mb-3",placeholder:"Search....."},null,512),[[be,f.value]]),e("div",at,[te(xe,{class:"form-control form-control-solid",style:{padding:"0.375rem 0.75rem"},modelValue:_.value,"onUpdate:modelValue":[n[4]||(n[4]=t=>_.value=t),ie]},null,8,["modelValue"]),y(M)?(u(),fe(Ce,{key:0,style:{"min-height":"40vh"}})):(u(),m("div",ot,[e("div",lt,[e("div",nt,[(u(!0),m(Q,null,V(ae.value,(t,T)=>{var L,S,g;return u(),m("div",{class:"col-md-4 mt-2 px-1",onDblclick:re=>oe(t),key:`pos-s-roduct-${T}`},[e("div",it,[e("div",ct,[e("div",rt,[e("img",{src:`${(S=(L=t==null?void 0:t.product)==null?void 0:L.images[0])==null?void 0:S.url}`},null,8,ut)]),e("div",vt,i((g=t==null?void 0:t.product)==null?void 0:g.title)+"... ",1),e("div",ht,i(t==null?void 0:t.price)+" $ ",1),e("a",{href:"javascript:void(0)",class:"card-button",onClick:re=>ne(t)},"Show Details",8,_t)])])],40,dt)}),128))])])]))])])])])])]),e("div",mt,[e("div",pt,[e("div",yt,[e("div",bt,[e("div",ft,[e("div",gt,[e("div",wt,[e("div",xt,[e("div",Ct,[(u(!0),m(Q,null,V((B=(A=s.value)==null?void 0:A.product)==null?void 0:B.images,(t,T)=>(u(),m("img",{class:"w-100",src:`${t==null?void 0:t.url}`,key:`single-image-${T}`},null,8,kt))),128))])]),e("div",Tt,[e("img",{class:"w-100",src:`${(q=(N=(U=s.value)==null?void 0:U.product)==null?void 0:N.images[0])==null?void 0:q.url}`},null,8,Lt)])])]),e("div",St,[e("h1",Qt,i((O=(z=s.value)==null?void 0:z.product)==null?void 0:O.title)+"-"+i((F=(j=s.value.varient)==null?void 0:j.replace(/\//g,"-"))==null?void 0:F.slice(0,-1)),1),e("h4",null,"Product Sku: "+i((H=s.value)==null?void 0:H.sku),1),e("p",null,[w("Category: "),e("strong",null,i((E=(Z=(R=s.value)==null?void 0:R.product)==null?void 0:Z.category)==null?void 0:E.name),1)]),e("p",$t,"Variation: "+i((K=(J=s.value.varient)==null?void 0:J.replace(/\//g,"-"))==null?void 0:K.slice(0,-1)),1),e("h2",It,"Price: "+i(s.value.price)+" $",1),e("div",{class:"border-t w-100"},[e("button",{class:"btn btn-primary w-100 rounded-0 py-5 fs-2 fw-bold",onClick:le},"Add To Pos")])])]),e("div",Mt,[e("div",Pt,[Vt,e("div",null,[Dt,e("p",null,i((W=(G=s.value)==null?void 0:G.product)==null?void 0:W.description),1)]),At,e("div",null,[Bt,e("div",{class:"product-content",innerHTML:(Y=(X=s.value)==null?void 0:X.product)==null?void 0:Y.details},null,8,Ut)])])])])])])])],64)}}},jt=ue(Nt,[["__scopeId","data-v-6053ded8"]]);export{jt as default};
