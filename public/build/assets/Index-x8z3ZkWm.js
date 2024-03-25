import{_,aV as m,c as n,a as t,P as g,bA as p,F as f,aT as C,e as u,o as l,b7 as a,O as v}from"./app-hQsoMlrz.js";const y={name:"Index",data(){return{categories:{}}},methods:{allCategories(){this.$axios.get("api/category").then(s=>{this.categories=s.data}).catch(s=>{s.response.data.errors,Toast.fire({icon:"warning",title:s.response.statusText})})},deleteCategory(s){Swal.fire({title:"Are You Sure!",text:"you watnt to delete this?",icon:"warning",confirmButtonColor:"#ddd",cancelButtonColor:"red",confirmButtonText:"Delete",showCancelButton:!0}).then(i=>{i.value&&this.$axios.delete("/api/category/"+s).then(o=>{Toast.fire({icon:"success",title:o.data.message}),this.allCategories()}).catch(o=>{Toast.fire({icon:"error",title:o.response.statusText})})}).catch(()=>{Swal.fire({icon:"success",title:"dont worry. your data is safe..."}),this.$router.push({name:"ManageEmployee"})})},isLogined(){User.loggedIn()||this.$router.push({name:"Login"})}},created(){this.isLogined(),this.allCategories()}},b={class:"card card-custom"},k={class:"card-header flex-wrap py-5"},L=t("div",{class:"card-title"},[t("h3",{class:"card-label"},[u("All Category "),t("span",{class:"d-block text-muted pt-2 font-size-sm"},"all category details is here")])],-1),B={class:"card-toolbar"},$=t("span",{class:"svg-icon svg-icon-md"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},[t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("rect",{x:"0",y:"0",width:"24",height:"24"}),t("circle",{fill:"#000000",cx:"9",cy:"15",r:"6"}),t("path",{d:"M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z",fill:"#000000",opacity:"0.3"})])])],-1),T={class:"card-body"},N={class:"table table-separate table-head-custom table-checkable",id:""},A=t("thead",null,[t("tr",null,[t("th",null,"Record ID"),t("th",null,"Image"),t("th",null,"Name"),t("th",null,"Parent Cat"),t("th",null,"Actions")])],-1),I={class:"symbol-label"},M=["src"],S=t("span",{class:"svg-icon svg-icon-md"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},[t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("rect",{x:"0",y:"0",width:"24",height:"24"}),t("path",{d:"M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z",fill:"#000000","fill-rule":"nonzero",transform:"translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "}),t("rect",{fill:"#000000",opacity:"0.3",x:"5",y:"20",width:"15",height:"2",rx:"1"})])])],-1),V=["onClick"],D=v('<span class="svg-icon svg-icon-md"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"></path><path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"></path></g></svg></span>',1),E=[D];function Z(s,i,o,z,w,x){var c;const r=m("router-link");return l(),n("div",null,[t("div",b,[t("div",k,[L,t("div",B,[g(r,{to:{name:"AddCategory"},href:"#",class:"btn btn-primary font-weight-bolder"},{default:p(()=>[$,u("New Record")]),_:1})])]),t("div",T,[t("table",N,[A,t("tbody",null,[(l(!0),n(f,null,C((c=w.categories)==null?void 0:c.data,(e,d)=>{var h;return l(),n("tr",{key:`key-is-cat-${d}`},[t("td",null,a(d+1),1),t("td",null,[t("span",I,[t("img",{src:`/storage/${e==null?void 0:e.photo}`,alt:"",style:{height:"35px"}},null,8,M)])]),t("td",null,a(e.name),1),t("td",null,a(((h=e==null?void 0:e.parent)==null?void 0:h.name)??"------"),1),t("td",null,[g(r,{to:{name:"EditCategory",params:{id:e.id}},class:"btn btn-sm btn-clean btn-icon",title:"Edit details"},{default:p(()=>[S]),_:2},1032,["to"]),t("a",{href:"javascript:;",onClick:F=>x.deleteCategory(e.id),class:"btn btn-sm btn-clean btn-icon",title:"Delete"},E,8,V)])])}),128))])])])])])}const R=_(y,[["render",Z]]);export{R as default};
