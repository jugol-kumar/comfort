import{aW as r,bJ as T,aK as V,c as i,a as e,F as q,i as I,t as l,e as U,b as z,v as D,o as d,$ as N}from"./app-_aaoa6OJ.js";const E={class:"card card-custom"},F=e("div",{class:"card-header flex-wrap py-5"},[e("div",{class:"card-title"},[e("h3",{class:"card-label"},"Stoke Management ")])],-1),O={class:"card-body"},P={class:"table table-separate table-head-custom table-checkable",id:""},R=e("thead",null,[e("tr",null,[e("th",null,"Record ID"),e("th",null,"Title"),e("th",null,"Category"),e("th",null,"Stoke Status"),e("th",null,"Unit price"),e("th",null,"Courrent Stoke"),e("th",null,"Actions")])],-1),J={class:"d-flex flex-column"},K={class:"fw-bold"},Q={class:"fs-6"},W={key:0,class:"badge badge-success bg-success fw-bold text-white"},Z={key:1,class:"badge badge-danger bg-danger fw-bold text-white"},j=["onClick"],G=N('<span class="svg-icon svg-icon-md"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "></path><rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"></rect></g></svg></span>',1),H=[G],X=e("tbody",null,null,-1),Y={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ee={class:"modal-dialog"},te={class:"modal-content"},se={class:"card"},le={class:"card-body"},ae={class:"fw-bold"},oe={class:"fw-bold"},ne={class:"fw-bold"},ie={class:"fw-bold"},de={class:"fw-bolder"},ce={class:"badge bg-primary"},re=e("hr",{class:"border broder-1"},null,-1),he=e("label",{for:"qty"},"Add Stoke Quantity",-1),me={__name:"Stoke",setup(_e){const o=User.userInfo(),h=r([]),{sendRequest:_}=T(),a=r({}),c=r(null),L=s=>{$("#exampleModal").modal("show"),a.value=s},B=async()=>{var n;const s=await _({method:"put",data:{qty:c.value},url:`/api/admin/update-stokes/${(n=a.value)==null?void 0:n.id}`,headers:{Authorization:`Bearer ${o==null?void 0:o.token}`}});s!=null&&s.message&&(await u(),$("#exampleModal").modal("hide"),Toast.fire({icon:"success",title:s==null?void 0:s.message})),console.log(s)},u=async()=>{const s=await _({method:"get",url:"/api/admin/product-stokes",headers:{Authorization:`Bearer ${o==null?void 0:o.token}`}});h.value=s};return V(async()=>{await u()}),(s,n)=>{var b,m,v,g,k,f,w,y;return d(),i(q,null,[e("div",null,[e("div",E,[F,e("div",O,[e("table",P,[R,(d(!0),i(q,null,I((b=h.value)==null?void 0:b.data,(t,x)=>{var p,S,C,A,M;return d(),i("tr",{key:`stoke-${x}`},[e("td",null,"#_"+l(x+1),1),e("td",null,[e("div",J,[e("h5",K,l((p=t==null?void 0:t.product)==null?void 0:p.title)+"-"+l((C=(S=t==null?void 0:t.varient)==null?void 0:S.replace(/\//g,"-"))==null?void 0:C.slice(0,-1)),1),e("small",Q,"Sku: "+l(t==null?void 0:t.sku),1)])]),e("td",null,l((M=(A=t==null?void 0:t.product)==null?void 0:A.category)==null?void 0:M.name),1),e("td",null,[t.qty>0?(d(),i("span",W,"Available In Stoke")):(d(),i("span",Z,"Out Of Stoke"))]),e("td",null,l(t==null?void 0:t.price)+" $",1),e("td",null,l(t.qty),1),e("td",null,[e("button",{onClick:ue=>L(t),class:"btn btn-sm btn-clean btn-icon",title:"Edit details"},H,8,j)])])}),128)),X])])])]),e("div",Y,[e("div",ee,[e("div",te,[e("div",se,[e("div",le,[e("h4",ae,"Product: "+l((v=(m=a.value)==null?void 0:m.product)==null?void 0:v.title),1),e("h6",oe,"Varient: "+l((f=(k=(g=a.value)==null?void 0:g.varient)==null?void 0:k.replace(/\//g,"-"))==null?void 0:f.slice(0,-1)),1),e("h6",ne,"Sku: "+l((w=a.value)==null?void 0:w.sku),1),e("h6",ie,"Unit Price: "+l((y=a.value)==null?void 0:y.price)+" $",1),e("h6",de,[U("Current Stoke: "),e("span",ce,l(a.value.qty),1)]),re,e("div",null,[he,z(e("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>c.value=t),class:"form-control",placeholder:"e.g Add more 500 pc"},null,512),[[D,c.value]])]),e("button",{class:"btn btn-primary ms-auto mt-3",onClick:B}," Add To Stoke ")])])])])])],64)}}};export{me as default};
