import{_ as f}from"./RequestLoading-YD9hJQeu.js";import{_ as u,aV as _,c as r,a as s,H as i,P as h,w as g,b,v,b7 as p,e as y,o as a}from"./app-pW82LcES.js";const x={name:"Add",components:{RequestLoading:f},data(){return{isLoading:!1,from:{name:"",description:"",photo:""},avatar:{},errors:{}}},methods:{uploadFile(t){let e=t.target.files[0];this.avatar=e;let l=new FileReader;l.onload=c=>{this.from.photo=c.target.result},l.readAsDataURL(e)},saveBrand(){this.isLoading=!0;let t=new FormData;t.append("image",this.avatar),t.append("title",this.from.name),t.append("photo",this.from.photo),this.$axios.post("api/brand",t).then(e=>{this.from.name="",this.from.description="",this.from.photo="",this.avatar="",this.errors="",Toast.fire({icon:"success",title:e.data.message})}).catch(e=>{this.errors=e.response.data.errors,Toast.fire({icon:"warning",title:e.response.statusText})}).finally(e=>{this.isLoading=!1})}},created(){User.loggedIn()||this.$router.push({name:"Login"})}},L={class:"card card-custom"},w={class:"card-header"},B={key:0,class:"card-title"},k={class:"card-body"},F={class:"form-group"},S=s("label",null,"Brand Name",-1),N=["disabled"],V={key:0,class:"text-danger"},R={class:"form-group d-flex flex-column"},T={key:0,class:"text-danger"},A=s("label",null,[y("Photo "),s("a",{href:"https://worldvectorlogo.com",target:"_blank"},"Find Brand Logo & Images")],-1),C=["disabled"],D=["src"],q={class:"card-footer d-flex"},U={key:0,type:"submit",class:"btn btn-primary mr-2"},E=s("button",{type:"reset",class:"btn btn-secondary"},"Cancel",-1);function I(t,e,l,c,o,d){const m=_("RequestLoading");return a(),r("div",null,[s("div",L,[s("div",w,[o.isLoading?i("",!0):(a(),r("h3",B,"Add New Brand")),h(m,{isShow:o.isLoading},null,8,["isShow"])]),s("form",{class:"form",onSubmit:e[2]||(e[2]=g(n=>d.saveBrand(),["prevent"])),enctype:"multipart/form-data"},[s("div",k,[s("div",F,[S,b(s("input",{type:"text",disabled:o.isLoading,class:"form-control form-control-solid","onUpdate:modelValue":e[0]||(e[0]=n=>o.from.name=n),placeholder:"Enter Brand name..."},null,8,N),[[v,o.from.name]]),o.errors.name?(a(),r("small",V,p(o.errors.name[0]),1)):i("",!0)]),s("div",R,[o.errors.photo?(a(),r("small",T,p(o.errors.photo[0]),1)):i("",!0),A,s("input",{type:"file",disabled:o.isLoading,class:"form-control",onChange:e[1]||(e[1]=(...n)=>d.uploadFile&&d.uploadFile(...n))},null,40,C)]),o.from.photo?(a(),r("img",{key:0,src:o.from.photo,alt:"",style:{width:"180px",height:"120px"}},null,8,D)):i("",!0)]),s("div",q,[h(m,{isShow:o.isLoading},null,8,["isShow"]),o.isLoading?i("",!0):(a(),r("button",U,"Submit")),E])],32)])])}const H=u(x,[["render",I]]);export{H as default};
