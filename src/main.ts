// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
//引入全局样式
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import 'virtual:svg-icons-register'
//@ts-ignore 选择中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import globalComponent from '@/components/index'
import router from './router'
//引入pinia 大仓库
import pinia from './store'

const app = createApp(App)
//调用globalComponent的 install方法注册全局组件
app.use(router)
app.use(pinia)
app.use(globalComponent)
app.use(ElementPlus, {
    locale: zhCn
})
app.mount('#app')