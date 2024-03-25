import{_ as h,c as a,a as e,w as _,b as n,v as i,b7 as p,H as u,bs as v,o as d,p as g,d as b}from"./app-hQsoMlrz.js";const x={name:"Add",data(){return{from:{name:"",email:"",phone:"",address:"",photo:null},errors:{}}},methods:{uploadFile(t){let s=t.target.files[0],m=new FileReader;m.onload=f=>{this.from.photo=f.target.result},m.readAsDataURL(s)},saveCustomer(){this.$axios.post("api/customer",this.from).then(t=>{this.from="",this.errors="",Toast.fire({icon:"success",title:t.data.message})}).catch(t=>{this.errors=t.response.data.errors,Toast.fire({icon:"warning",title:t.response.statusText})})}},created(){User.loggedIn()||this.$router.push({name:"Login"})}},l=t=>(g("data-v-e3df04e9"),t=t(),b(),t),y={class:"card card-custom"},w=l(()=>e("div",{class:"card-header"},[e("h3",{class:"card-title"},"Add New Customer")],-1)),S={class:"card-body"},C={class:"form-group"},T=l(()=>e("label",null,"Name",-1)),U={key:0,class:"text-danger"},V={class:"form-group"},k=l(()=>e("label",null,"Email",-1)),A={key:0,class:"text-danger"},E={class:"form-group"},F=l(()=>e("label",null,"Phone",-1)),I={key:0,class:"text-danger"},N={class:"form-group"},B=l(()=>e("label",{for:"exampleTextarea"},"Address",-1)),D={class:"form-group"},L=l(()=>e("label",null,"Photo",-1)),M=["src"],P=l(()=>e("div",{class:"card-footer"},[e("button",{type:"submit",class:"btn btn-primary mr-2"},"Submit"),e("button",{type:"reset",class:"btn btn-secondary"},"Cancel")],-1));function R(t,s,m,f,o,c){return d(),a("div",null,[e("div",y,[w,e("form",{class:"form",onSubmit:s[5]||(s[5]=_(r=>c.saveCustomer(),["prevent"])),enctype:"multipart/form-data"},[e("div",S,[e("div",C,[T,n(e("input",{type:"text",class:"form-control form-control-solid","onUpdate:modelValue":s[0]||(s[0]=r=>o.from.name=r),placeholder:"Enter customer name..."},null,512),[[i,o.from.name]]),o.errors.name?(d(),a("small",U,p(o.errors.name[0]),1)):u("",!0)]),e("div",V,[k,n(e("input",{type:"email",class:"form-control form-control-solid","onUpdate:modelValue":s[1]||(s[1]=r=>o.from.email=r),placeholder:"Enter customer name..."},null,512),[[i,o.from.email]]),o.errors.email?(d(),a("small",A,p(o.errors.email[0]),1)):u("",!0)]),e("div",E,[F,n(e("input",{type:"text",class:"form-control form-control-solid","onUpdate:modelValue":s[2]||(s[2]=r=>o.from.phone=r),placeholder:"Enter customer name..."},null,512),[[i,o.from.phone]]),o.errors.name?(d(),a("small",I,p(o.errors.phone[0]),1)):u("",!0)]),e("div",N,[B,n(e("textarea",{id:"exampleTextarea",class:"form-control form-control-solid","onUpdate:modelValue":s[3]||(s[3]=r=>o.from.address=r),rows:"3"},null,512),[[i,o.from.address]])]),e("div",D,[L,e("input",{type:"file",class:"form-control",onChange:s[4]||(s[4]=(...r)=>c.uploadFile&&c.uploadFile(...r))},null,32)]),n(e("img",{class:"preview-image",src:o.from.photo,alt:""},null,8,M),[[v,o.from.photo]])]),P],32)])])}const j=h(x,[["render",R],["__scopeId","data-v-e3df04e9"]]);export{j as default};