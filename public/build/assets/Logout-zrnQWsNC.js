import{_ as s,bI as o}from"./app-hQsoMlrz.js";const r={name:"Logout",methods:{refresh(){let t=localStorage.getItem("_token");o.post("http://localhost:8000/api/auth/refresh?token="+t).then(e=>{User.responseAfterLogin(e)}).catch(e=>{Toast.fire({icon:"warning",title:e.response.data.error}),e.response.status==500&&Toast.fire({icon:"error",title:e.response.statusText})})}},created(){if(!User.loggedIn())this.$router.push({name:"Login"});else{let t=localStorage.getItem("_token");o.post("api/auth/logout?token="+t).then(e=>{localStorage.removeItem("_token"),localStorage.removeItem("_user"),Toast.fire({icon:"success",title:e.data.message}),this.$router.push({name:"Login"}),window.reload()}).catch(e=>{Toast.fire({icon:"warning",title:e.response.statusText})})}}};function a(t,e,n,i,c,l){return null}const u=s(r,[["render",a]]);export{u as default};
