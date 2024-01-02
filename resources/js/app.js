import { createApp } from 'vue'
import App from './components/App'
import 'vue-select/dist/vue-select.css';
import router from './routers/router'
import User from './helpers/User'
import Swal from "sweetalert2";
import axios from "axios";
import moment from 'moment'



window.Swal = Swal
const Toast = Swal.mixin({
    toast: true,
    position:'top-end',
    showConfirmButton:false,
    timer:5000,
    icon:true,
})


import vSelect from 'vue-select'
import Uploader from 'vue-media-upload'
const app = createApp(App)
app.use(router)
app.use(moment)
app.component('v-select', vSelect)
app.component('Uploader', Uploader);

window.Toast = Toast
window.User = User

axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').content;
const instance = axios.create({
    withCredentials: true,
    withXSRFToken: true,
    baseURL:"http://localhost:8000" //"https://ctpse.info",
});
app.config.globalProperties.$axios = instance;


app.mount( '#app')