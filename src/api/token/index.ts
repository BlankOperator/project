import request from "@/utils/request";

//用户axios请求接口
enum API {
    CHECK_TOKEN = "/token",
}

//登录接口
const checkToken = () => request.get(API.CHECK_TOKEN);

export { checkToken };