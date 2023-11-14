import axios from 'axios'
import userStore from '@/store/modules/user';

const request = axios.create({
    baseURL: import.meta.env.VITE_SERVE,  // 注意！！ 这里是全局axios统一加上了 'http://localhost:9091' 前缀
    // mark timeout: 5000 设置超时时间 但是后台 debug 时一定要关掉！！！
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    let store = userStore();
    if (store.user) {
        config.headers['token'] = store.user.token;
    }
    return config;
}, error => {
    let object = {
        status: false,
        message: error.message,
    }
    return Promise.resolve(object);
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        let object = {
            status: false,
            message: error.message,
        }
        return Promise.resolve(object);
    }
)

export default request

