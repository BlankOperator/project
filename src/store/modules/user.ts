// 创建用户相关的小仓库
import { defineStore } from 'pinia'
import { constantRoute } from '@/router/routes'

interface User {
    id: number;
    username: string;
    nickname: string;
    email: string;
    phone: string;
    token: string;
    avatar: string;
}

let userStore = defineStore('User', {
    //储存数据
    state: () => {
        return {
            menuRoutes: constantRoute,//储存右侧菜单路由数组
            user: {} as User,
        };
    },
    actions: {
        setUser(user: any) {
            this.user = user;
        }
    },
    getters: {

    },
    persist: [
        {
            paths: ['user'],
            storage: localStorage,
        },
    ],
})

export default userStore