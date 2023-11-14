import request from "@/utils/request";

//用户axios请求接口
enum API {
    LOGIN_URL = "/user/login",
    USER_LIST_URL = "/user/list",
}

//登录接口
const loginRequest = (data: any) => request.post(API.LOGIN_URL, data);
//获取用户列表接口
const getUserListRequest = () => request.get(API.USER_LIST_URL);

export {loginRequest, getUserListRequest};