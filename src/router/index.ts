import { createRouter, createWebHistory } from "vue-router";
import { constantRoute } from './routes'
//@ts-ignore
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
import userStore from "@/store/modules/user";
import { checkToken } from "@/api/token";

//获取路由器
let router = createRouter({
    history: createWebHistory(),
    routes: constantRoute,
});

router.beforeEach((to: any, from: any, next: any) => {
    let store = userStore();
    let user = store.user;
    nprogress.start();
    //有token
    if (user.token) {
        // 主动让java 拦截器判断是否token 有效
        checkToken().then((response: any) => {
            //有效token 拥有跳转router权限
            if (response.status) {
                next();
            //无效直接清空token 让你去登录
            } else {
                user.token = "";
                next({ path: "/login" });
            }
        })
    //没有token
    } else {
        //要登录 直接给他
        if (to.path === "/login") {
            next();
        // 除了去登录 哪都不让你去
        } else {
            next({ path: "/login" });
        }
    }
})

router.afterEach((to: any, from: any, next: any) => {
    nprogress.done();
})
export default router;
