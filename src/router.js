import {createRouter,createWebHashHistory} from "vue-router"
import Login from "./components/Login"
import App from "./App.vue"
import Home from "@/components/Home";
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/loginPage",
            component:Login,
        },

        {
            path:"/home",
            component:Home,
        },
        {
            path:"/",
            component:App,
        }

    ]

});
//导航首位 路由守卫 路由拦截
router.beforeEach(
    (to,from)=>{
    console.log(to);
    console.log(from);
})

export default router;//暴露出来的router