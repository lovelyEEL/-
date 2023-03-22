// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app')
//
import { createApp } from 'vue'
import App from './App.vue';
import ElementPlus from 'element-plus';//1.引入组件
import 'element-plus/theme-chalk/index.css';//2.引入CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import router from "./router.js"


const app=createApp(App);
app.use(router),
app.use(ElementPlus);
app.mount('#app')
