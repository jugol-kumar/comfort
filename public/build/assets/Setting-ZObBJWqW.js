import{bH as w,aQ as v,aE as C,aV as g,c as i,a as e,av as p,P as n,bA as S,H as m,b as T,v as P,o as r}from"./app-ZJ2UjalZ.js";import{_ as b}from"./TreeCategory-Ygb9dLl0.js";const k={class:"row"},V={class:"col-md-3 d-flex flex-column gap-2"},B=e("div",{class:"card-body p-4"}," Home Page Setting ",-1),U=[B],$=e("div",{class:"card-body p-4"}," Top-bar Page ",-1),H=[$],N=e("div",{class:"card-body p-4"}," Top-bar Text ",-1),A=[N],R=e("div",{class:"card-body p-4"}," Footer Setup ",-1),D={class:"col-md-9"},E={key:0,class:"card"},L=e("div",{class:"card-header d-flex gap-2"},[e("h3",{class:"card-title m-0"},"Product Details")],-1),M={class:"card-body"},q={class:"form-row"},z={class:"col-md form-group"},F=e("label",null,"Nav Bar Categories",-1),O={class:"col-md form-group"},Q=e("label",null,"Home Cats",-1),j={key:1,class:"card"},G=e("div",{class:"card-header d-flex gap-2"},[e("h3",{class:"card-title m-0"},"Top-bar Page Setup")],-1),I={class:"card-body"},J={class:"form-row"},K={key:2,class:"card"},W=e("div",{class:"card-header d-flex gap-2"},[e("h3",{class:"card-title m-0"},"Top-bar Page Setup")],-1),X={class:"card-body"},Y={class:"form-row"},se={__name:"Setting",setup(Z){const{sendRequest:c}=w(),a=v({navCats:[],homeCats:[],headerPages:[],topBarText:""}),_=v([]),u=()=>{c({url:"/api/admin/save-setting",method:"POST",data:a.value}),Toast.fire({icon:"success",title:"Setting Update Success..."})},h=async()=>{const l=await c("/api/admin/get-setting");a.value=l==null?void 0:l.bSettings},f=async()=>{_.value=await c("api/pages")};C(async()=>{await h(),await f()});const o=v("details"),d=l=>o.value=l;return(l,t)=>{const x=g("RouterLink"),y=g("v-select");return r(),i("section",null,[e("div",k,[e("div",V,[e("div",{class:p(["card cursor-pointer",{"bg-primary text-white fw-bolder":o.value==="details"}]),onClick:t[0]||(t[0]=s=>d("details"))},U,2),e("div",{class:p(["card cursor-pointer",{"bg-primary text-white fw-bolder":o.value==="headerPages"}]),onClick:t[1]||(t[1]=s=>d("headerPages"))},H,2),e("div",{class:p(["card cursor-pointer",{"bg-primary text-white fw-bolder":o.value==="topBarText"}]),onClick:t[2]||(t[2]=s=>d("topBarText"))},A,2),n(x,{to:"/setting/footer-setting",class:"card cursor-pointer",onClick:t[3]||(t[3]=s=>d("details"))},{default:S(()=>[R]),_:1})]),e("div",D,[o.value==="details"?(r(),i("div",E,[L,e("div",M,[e("div",q,[e("div",z,[F,n(b,{modelValue:a.value.navCats,"onUpdate:modelValue":t[4]||(t[4]=s=>a.value.navCats=s),multiple:""},null,8,["modelValue"])]),e("div",O,[Q,n(b,{modelValue:a.value.homeCats,"onUpdate:modelValue":t[5]||(t[5]=s=>a.value.homeCats=s),multiple:""},null,8,["modelValue"])])]),e("button",{class:"btn btn-primary fw-bold",onClick:u},"Save Setting")])])):m("",!0),o.value==="headerPages"?(r(),i("div",j,[G,e("div",I,[e("div",J,[n(y,{modelValue:a.value.headerPages,"onUpdate:modelValue":t[6]||(t[6]=s=>a.value.headerPages=s),options:_.value,multiple:"",class:"form-control h-auto",reduce:s=>s.id,label:"title",placeholder:"Select Page..."},null,8,["modelValue","options","reduce"])]),e("button",{class:"btn btn-primary fw-bold mt-5",onClick:u},"Save Setting")])])):m("",!0),o.value==="topBarText"?(r(),i("div",K,[W,e("div",X,[e("div",Y,[T(e("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=s=>a.value.topBarText=s),class:"form-control",placeholder:"Top Bar Text...."},null,512),[[P,a.value.topBarText]])]),e("button",{class:"btn btn-primary fw-bold mt-5",onClick:u},"Save Setting")])])):m("",!0)])])])}}};export{se as default};