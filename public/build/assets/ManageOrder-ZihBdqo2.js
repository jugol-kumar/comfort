import{_ as ot,c as a,a as t,F as Y,i as tt,e as st,t as e,h,$ as _,o as n}from"./app-_aaoa6OJ.js";const lt="/build/assets/logo-ffQpNU8I.png",it={name:"MangeOrder",data(){return{orders:{},orderDetails:{},user:User.userInfo()}},methods:{allOrder(){var i;this.$axios.get("/api/admin/orders",{headers:{Authorization:`Bearer ${(i=this.user)==null?void 0:i.token}`}}).then(l=>{this.orders=l.data}).catch(l=>{l.response.data.errors,Toast.fire({icon:"warning",title:l.response.statusText})})},showSingleOrder(i){$("#exampleModal").modal("show"),this.orderDetails=i},isLogined(){User.loggedIn()||this.$router.push({name:"Login"})}},computed:{totalQuantity(){let i=0;for(let l=0;l<this.orders.length;l++)i+=this.orders[l].quantity;return i},grandTotalAmount(){let i=0;for(let l=0;l<this.orders.length;l++)i+=this.orders[l].pay_bill;return i}},created(){this.isLogined(),this.allOrder()}},at={class:"card card-custom"},nt=t("div",{class:"card-header flex-wrap py-5"},[t("div",{class:"card-title"},[t("h3",{class:"card-label"},"Order Details ")])],-1),dt={class:"card-body"},ct={class:"table table-separate table-head-custom table-checkable",id:""},rt=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Customer"),t("th",null,"Total"),t("th",null,"Order Status"),t("th",{class:"text-center"},"Type"),t("th",null,"Payment Status"),t("th",null,"Payment Method"),t("th",null,"Order Date"),t("th",null,"Actions")])],-1),ht={class:"text-center"},_t={class:"badge bg-primary"},pt={class:"text-center"},ut={class:"badge bg-info"},vt={class:"text-center"},gt={class:"text-capitalize"},mt=["onClick"],bt=_('<span class="svg-icon svg-icon-md"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="#000000" opacity="0.3"></path><path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="#000000"></path></g></svg></span>',1),wt=[bt],ft=["href"],xt=_('<span class="svg-icon svg-icon-md"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="#000000" opacity="0.3"></path><path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="#000000"></path></g></svg></span>',1),yt=[xt],Lt=_('<span class="svg-icon svg-icon-md"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"></path><path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"></path></g></svg></span>',1),Ct=[Lt],kt={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Dt={class:"modal-dialog modal-lg"},Mt={class:"modal-content"},Ot={class:"card invoice-preview-card shadow-none py-5"},St={class:"card-body invoice-padding pb-0 mb-5"},Zt={class:"d-flex align-items-center justify-content-between"},Tt={style:{"text-align":"left","max-width":"35%"}},zt=t("div",{class:"logo-wrapper mb-5"},[t("img",{src:lt,alt:"",height:"40"})],-1),Bt=t("h3",{class:"mt-1 fw-semibold fs-3 mb-3 text-capitalize"},"Invoice To: ",-1),Nt={key:0,class:"card-text mb-0 pb-0"},Pt={key:1,class:"card-text mb-0 pb-0"},jt={key:2,class:"card-text mb-0 pb-0"},It={key:3,class:"card-text mb-0 pb-0"},At={style:{"text-align":"right"}},Vt={class:"mt-md-0 mt-2"},qt=t("h4",{class:"invoice-title"},[st(" Invoice "),t("span",{class:"invoice-number"},"#5433")],-1),Et={class:"invoice-date-wrapper"},Qt={class:"invoice-date-title"},Ut=_('<div class="invoice-date-wrapper"><p class="invoice-date-title text-capitalize">Order Status: <span class="badge bg-info ms-1">Shipped</span></p></div><div class="invoice-date-wrapper"><p class="invoice-date-title text-capitalize">Payment Status: <span class="badge bg-info ms-1">Pending</span></p></div>',2),Ft=t("hr",{class:"invoice-spacing"},null,-1),Gt={class:"table-responsive"},Ht={class:"table"},Jt=t("thead",null,[t("tr",null,[t("th",{class:"py-1",width:"40%"},"Product Name"),t("th",{class:"py-1"},"Price"),t("th",{class:"py-1"},"size & Qty"),t("th",{class:"py-1"},"Total")])],-1),Kt={class:"py-1"},Rt={href:"#",class:"text-info text-capitalize"},Wt={class:"py-1"},Xt={class:"fw-bold"},Yt={class:"py-1"},$t={class:"fw-bold"},t1={class:"py-1"},s1={class:"fw-bold"},e1=t("hr",null,null,-1),o1={class:"card-body invoice-padding pb-0"},l1={class:"row invoice-sales-total-wrapper"},i1=t("div",{class:"col-md-8 order-md-1 mt-md-0 mt-3"},null,-1),a1={class:"col-md-4 d-flex justify-content-end order-md-2"},n1={class:"invoice-total-wrapper w-100"},d1={class:"invoice-total-item d-flex justify-content-between"},c1=t("p",{class:"invoice-total-title"},"Subtotal:",-1),r1={class:"invoice-total-amount"},h1={class:"invoice-total-item d-flex justify-content-between"},_1=t("p",{class:"invoice-total-title"},"Delivery Charge:",-1),p1={class:"invoice-total-amount"},u1=t("hr",{class:"my-50"},null,-1),v1={class:"invoice-total-item d-flex justify-content-between"},g1=t("p",{class:"invoice-total-title text-black fw-bolder"},"Grand Total:",-1),m1={class:"invoice-total-amount text-black fw-bolder"};function b1(i,l,w1,f1,o,et){var p,u,v,g,m,b,w,f,x,y,L,C,k,D,M,O,S,Z,T,z,B,N,P,j,I,A,V,q,E,Q,U,F,G,H,J,K;return n(),a("div",null,[t("div",at,[nt,t("div",dt,[t("table",ct,[rt,t("tbody",null,[(n(!0),a(Y,null,tt((p=o.orders)==null?void 0:p.orders.data,(s,c)=>{var d;return n(),a("tr",{key:`single-order-${c}`},[t("td",null,e(c+1),1),t("td",null,e((d=s.customer)==null?void 0:d.full_name),1),t("td",null,e(s.grand_total)+" $",1),t("td",ht,[t("span",_t,e(s==null?void 0:s.order_status),1)]),t("td",null,e(s==null?void 0:s.order_type),1),t("td",pt,[t("span",ut,e(s==null?void 0:s.payment_status),1)]),t("td",vt,[t("span",gt,e(s==null?void 0:s.payment_method),1)]),t("td",null,e(s==null?void 0:s.order_date),1),t("td",null,[t("a",{href:"#",onClick:r=>et.showSingleOrder(s)},wt,8,mt),t("a",{href:`http://localhost:5173/order-invoice/${s==null?void 0:s.id}`,target:"_blank",class:"btn btn-sm btn-clean btn-icon",title:"Edit details"},yt,8,ft),t("a",{href:"javascript:;",onClick:l[0]||(l[0]=r=>i.deleteCustomer(i.emp.id)),class:"btn btn-sm btn-clean btn-icon",title:"Delete"},Ct)])])}),128))])])])]),t("div",kt,[t("div",Dt,[t("div",Mt,[t("div",Ot,[t("div",St,[t("div",Zt,[t("div",Tt,[t("div",null,[zt,Bt,(v=(u=o.orderDetails)==null?void 0:u.customer)!=null&&v.full_name?(n(),a("p",Nt,[st("Name: "),t("strong",null,e((m=(g=o.orderDetails)==null?void 0:g.customer)==null?void 0:m.full_name),1)])):h("",!0),(w=(b=o.orderDetails)==null?void 0:b.address)!=null&&w.phone||(x=(f=o.orderDetails)==null?void 0:f.customer)!=null&&x.phone?(n(),a("p",Pt,"Phone: "+e(((L=(y=o.orderDetails)==null?void 0:y.address)==null?void 0:L.phone)??((k=(C=o.orderDetails)==null?void 0:C.customer)==null?void 0:k.phone)),1)):h("",!0),(M=(D=o.orderDetails)==null?void 0:D.address)!=null&&M.email||(S=(O=o.orderDetails)==null?void 0:O.customer)!=null&&S.email?(n(),a("p",jt,"Email: "+e(((T=(Z=o.orderDetails)==null?void 0:Z.address)==null?void 0:T.email)??((B=(z=o.orderDetails)==null?void 0:z.customer)==null?void 0:B.email)),1)):h("",!0),(P=(N=o.orderDetails)==null?void 0:N.address)!=null&&P.address||(I=(j=o.orderDetails)==null?void 0:j.customer)!=null&&I.address?(n(),a("p",It,"Address: "+e(((V=(A=o.orderDetails)==null?void 0:A.address)==null?void 0:V.address)??((E=(q=o.orderDetails)==null?void 0:q.customer)==null?void 0:E.address)),1)):h("",!0)])]),t("div",At,[t("div",Vt,[qt,t("div",Et,[t("p",Qt,"Order Date: "+e((Q=o.orderDetails)==null?void 0:Q.order_date),1)]),Ut])])])]),Ft,t("div",Gt,[t("table",Ht,[Jt,t("tbody",null,[(n(!0),a(Y,null,tt((U=o.orderDetails)==null?void 0:U.orderdetails,(s,c)=>{var d,r,R,W,X;return n(),a("tr",{key:`single-details-item-${c}`},[t("td",Kt,[t("a",Rt,e((d=s==null?void 0:s.product)==null?void 0:d.title)+"- "+e((R=(r=s==null?void 0:s.stoke)==null?void 0:r.varient)==null?void 0:R.replace(/\//g,"-").slice(0,-1)),1)]),t("td",Wt,[t("span",Xt,e((W=s==null?void 0:s.stoke)==null?void 0:W.price)+" $",1)]),t("td",Yt,[t("span",$t,e(s==null?void 0:s.quantity),1)]),t("td",t1,[t("span",s1,e(((X=s==null?void 0:s.stoke)==null?void 0:X.price)*(s==null?void 0:s.quantity))+" $ ",1)])])}),128))])])]),e1,t("div",o1,[t("div",l1,[i1,t("div",a1,[t("div",n1,[t("div",d1,[c1,t("p",r1,e((F=o.orderDetails)==null?void 0:F.sub_total)+" $",1)]),t("div",h1,[_1,t("p",p1," + "+e((J=(H=(G=o.orderDetails)==null?void 0:G.address)==null?void 0:H.order_area)==null?void 0:J.delivery_charge)+" $",1)]),u1,t("div",v1,[g1,t("p",m1,e((K=o.orderDetails)==null?void 0:K.grand_total)+" $",1)])])])])])])])])])])}const y1=ot(it,[["render",b1]]);export{y1 as default};
