import{o,c as s,a as n,b7 as l,H as d,F as u,aT as f,av as _}from"./app-g0Cj44fV.js";const y={class:"d-flex justify-content-between mx-0 row my-1 pt-1"},b={key:0,class:"col-sm-12 col-md-5"},v={class:"text-shadow"},g={class:"col-sm-12 col-md-7"},h={class:"pagination flex justify-content-end"},k=["onClick","innerHTML"],x={__name:"Pagination",props:{links:{type:Array},from:{type:Number,default:0},to:{type:Number,default:0},total:{type:Number,default:0},notShowNumber:{type:Boolean,default:!1}},emits:["someEvent"],setup(e,{emit:c}){const i=e,r=c,m=t=>r("someEvent",t==null?void 0:t.url);return(t,p)=>(o(),s("div",y,[i.notShowNumber?d("",!0):(o(),s("div",b,[n("div",v," Showing "+l(e.from)+" to "+l(e.to)+" of "+l(e.total)+" entries",1)])),n("div",g,[n("ul",h,[(o(!0),s(u,null,f(e.links,a=>(o(),s("li",{class:_(["paginate_button page-item",{active:a.active}])},[n("button",{onClick:N=>m(a),class:"page-link",innerHTML:a.label},null,8,k)],2))),256))])])]))}};export{x as _};
