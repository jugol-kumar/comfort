import{_ as f}from"./Pagination-5ndJ2QBu.js";import{_ as x,aV as p,c as i,a as t,P as r,bA as g,F as v,aT as C,e as w,o as c,b7 as a,O as y}from"./app-g0Cj44fV.js";const b={name:"ManageEmployee",components:{Pagination:f},data(){return{employes:{}}},methods:{allCustomer(l){this.$axios.get(l??"api/customer").then(e=>{this.employes=e.data}).catch(e=>{e.response.data.errors,Toast.fire({icon:"warning",title:e.response.statusText})})},deleteCustomer(l){Swal.fire({title:"Are You Sure!",text:"you watnt to delete this?",icon:"warning",confirmButtonColor:"#ddd",cancelButtonColor:"red",confirmButtonText:"Delete",showCancelButton:!0}).then(e=>{e.value&&axios.delete("/api/customer/"+l).then(n=>{Toast.fire({icon:"success",title:n.data.message}),this.allCustomer()}).catch(n=>{console.log(n.response.data)})}).catch(()=>{Swal.fire({icon:"success",title:"dont worry. your data is safe..."}),this.$router.push({name:"ManageEmployee"})})},isLogined(){User.loggedIn()||this.$router.push({name:"Login"})}},created(){this.isLogined(),this.allCustomer()}},k={class:"card card-custom"},L={class:"card-header flex-wrap py-5"},B=t("div",{class:"card-title"},[t("h3",{class:"card-label"},[w("All Customers "),t("span",{class:"d-block text-muted pt-2 font-size-sm"},"All customers details is here")])],-1),E={class:"card-toolbar"},S=t("span",{class:"svg-icon svg-icon-md"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},[t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("rect",{x:"0",y:"0",width:"24",height:"24"}),t("circle",{fill:"#000000",cx:"9",cy:"15",r:"6"}),t("path",{d:"M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z",fill:"#000000",opacity:"0.3"})])])],-1),A={class:"card-body"},N={class:"table table-separate table-head-custom table-checkable",id:""},M=t("thead",null,[t("tr",null,[t("th",null,"Record ID"),t("th",null,"Avatar"),t("th",null,"Email"),t("th",null,"Name"),t("th",null,"Phone"),t("th",null,"Actions")])],-1),T={class:"symbol-label"},P=["src"],V=t("span",{class:"svg-icon svg-icon-md"},[t("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},[t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("rect",{x:"0",y:"0",width:"24",height:"24"}),t("path",{d:"M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z",fill:"#000000","fill-rule":"nonzero",transform:"translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "}),t("rect",{fill:"#000000",opacity:"0.3",x:"5",y:"20",width:"15",height:"2",rx:"1"})])])],-1),D=["onClick"],Z=y('<span class="svg-icon svg-icon-md"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"></path><path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"></path></g></svg></span>',1),$=[Z];function z(l,e,n,I,o,d){var u;const h=p("router-link"),_=p("Pagination");return c(),i("div",null,[t("div",k,[t("div",L,[B,t("div",E,[r(h,{to:{name:"AddCustomer"},href:"#",class:"btn btn-primary font-weight-bolder"},{default:g(()=>[S,w("New Record")]),_:1})])]),t("div",A,[t("table",N,[M,t("tbody",null,[(c(!0),i(v,null,C((u=o.employes)==null?void 0:u.data,(s,m)=>(c(),i("tr",{key:`customer-${m}`},[t("td",null,a(m+1),1),t("td",null,[t("span",T,[t("img",{src:`${s.photo}`,alt:"",class:"rounded-circle",style:{width:"50px",height:"50px"}},null,8,P)])]),t("td",null,a(s.email),1),t("td",null,a(s.name),1),t("td",null,a(s.phone),1),t("td",null,[r(h,{to:{name:"EditEmployee",params:{id:s.id}},class:"btn btn-sm btn-clean btn-icon",title:"Edit details"},{default:g(()=>[V]),_:2},1032,["to"]),t("a",{href:"javascript:;",onClick:F=>d.deleteCustomer(s.id),class:"btn btn-sm btn-clean btn-icon",title:"Delete"},$,8,D)])]))),128))])]),r(_,{onSomeEvent:d.allCustomer,links:o.employes.links,from:o.employes.from,to:o.employes.to,total:o.employes.total,notShowNumber:!1},null,8,["onSomeEvent","links","from","to","total"])])])])}const O=x(b,[["render",z]]);export{O as default};
