import{bH as w,aQ as c,aE as y,aV as _,c as r,a as e,av as p,P as d,bA as V,H as g,o as u}from"./app-pW82LcES.js";import{_ as h}from"./TreeCategory-eB2kg9ja.js";const P={class:"row"},k={class:"col-md-3 d-flex flex-column gap-2"},x=e("div",{class:"card-body p-4"}," Home Page Setting ",-1),H=[x],B=e("div",{class:"card-body p-4"}," Header menu ",-1),N=[B],T=e("div",{class:"card-body p-4"}," Footer Setup ",-1),U={class:"col-md-9"},$={key:0,class:"card"},A=e("div",{class:"card-header d-flex gap-2"},[e("h3",{class:"card-title m-0"},"Product Details")],-1),R={class:"card-body"},E={class:"form-row"},L={class:"col-md form-group"},M=e("label",null,"Nav Bar Categories",-1),q={class:"col-md form-group"},z=e("label",null,"Home Cats",-1),D={key:1,class:"card"},F=e("div",{class:"card-header d-flex gap-2"},[e("h3",{class:"card-title m-0"},"Header Menu Setup")],-1),O={class:"card-body"},Q={class:"form-row"},J={__name:"Setting",setup(j){const{sendRequest:n}=w(),a=c({navCats:[],homeCats:[],headerPages:[]}),m=c([]),v=()=>{n({url:"/api/admin/save-setting",method:"POST",data:a.value}),Toast.fire({icon:"success",title:"Setting Update Success..."})},b=async()=>{const o=await n("/api/admin/get-setting");a.value=o==null?void 0:o.bSettings},f=async()=>{m.value=await n("api/pages")};y(async()=>{await b(),await f()});const l=c("details"),i=o=>l.value=o;return(o,t)=>{const C=_("RouterLink"),S=_("v-select");return u(),r("section",null,[e("div",P,[e("div",k,[e("div",{class:p(["card cursor-pointer",{"bg-primary text-white fw-bolder":l.value==="details"}]),onClick:t[0]||(t[0]=s=>i("details"))},H,2),e("div",{class:p(["card cursor-pointer",{"bg-primary text-white fw-bolder":l.value==="headerPages"}]),onClick:t[1]||(t[1]=s=>i("headerPages"))},N,2),d(C,{to:"/setting/footer-setting",class:"card cursor-pointer",onClick:t[2]||(t[2]=s=>i("details"))},{default:V(()=>[T]),_:1})]),e("div",U,[l.value==="details"?(u(),r("div",$,[A,e("div",R,[e("div",E,[e("div",L,[M,d(h,{modelValue:a.value.navCats,"onUpdate:modelValue":t[3]||(t[3]=s=>a.value.navCats=s),multiple:""},null,8,["modelValue"])]),e("div",q,[z,d(h,{modelValue:a.value.homeCats,"onUpdate:modelValue":t[4]||(t[4]=s=>a.value.homeCats=s),multiple:""},null,8,["modelValue"])])]),e("button",{class:"btn btn-primary fw-bold",onClick:v},"Save Setting")])])):g("",!0),l.value==="headerPages"?(u(),r("div",D,[F,e("div",O,[e("div",Q,[d(S,{modelValue:a.value.headerPages,"onUpdate:modelValue":t[5]||(t[5]=s=>a.value.headerPages=s),options:m.value,multiple:"",class:"form-control h-auto",reduce:s=>s.id,label:"title",placeholder:"Select Page..."},null,8,["modelValue","options","reduce"])]),e("button",{class:"btn btn-primary fw-bold",onClick:v},"Save Setting")])])):g("",!0)])])])}}};export{J as default};
