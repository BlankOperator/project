<template>
    <div class="login_container">
        <el-row>
            <el-col :span="14" :xs="0"></el-col>
            <el-col :span="10" :xs="24">
                <!-- 登录的表单 -->
                <el-form class="login_form" ref="loginForms" :model="loginForm" :rules="rules">
                    <h1>SIGN IN</h1>
                    <hr />
                    <h2>WELCOME TO USE</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" placeholder="USERNAME" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" placeholder="PASSWORD" v-model="loginForm.password"
                            show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login_btn" type="primary" size="default" @click="login">Sign in</el-button>
                    </el-form-item>
                    <b class="register">Create Account</b>
                    <b class="forget">Forget Password?</b>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import { ElMessage } from 'element-plus'
import { loginRequest } from '@/api/user';
//引入获取当前时间的函数
import getTime from '@/utils/time';
//引入用户相关的小仓库
import userStore from "@/store/modules/user";
let useStore = userStore();
//获取el-form组件
let loginForms = ref();
//获取路由器
let $router = useRouter();
//定义变量控制按钮加载效果
let loading = ref(false);
//收集账号与密码的数据
// mark 这里写死是为了快速登录用的
let loginForm = reactive({ username: 'root', password: 'qq123456' });
//登录按钮回调
const login = () => {
    //保证全部表单相校验通过再发请求
    loginForms.value.validate((valid: any) => {
        if (valid) {
            //加载效果:开始加载
            loading.value = true;
            loginRequest(loginForm).then((response: any) => {
                if (response.status) {
                    //将登录得到的信息赋值给pinia中的 user
                    useStore.setUser(response.data);
                    $router.push("/");
                    ElNotification({
                        type: 'success',
                        message: '登陆成功',
                        title: `HI,${getTime()}好`,
                        offset: 100,
                    }); 
                } else {
                    ElMessage({
                        showClose: true,
                        message: response.message,
                        type: 'error',
                    })
                }
            })
            loading.value = false;
        }
    })
}

//定义表单校验需要配置对象
const rules = {
    //表单的校验规则
    username: [
        { required: true, message: "请输入账号", trigger: "blur" },
        {
            min: 3,
            max: 16,
            message: "账号长度在 3 到 16 个字符",
            trigger: "blur",
        },
        {
            pattern: /^[a-zA-Z0-9_]{3,16}$/,
            message: "账号只包含字母、数字和下划线",
            trigger: "blur",
        },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        {
            min: 6,
            max: 16,
            message: "密码长度在 6 到 16 个字符",
            trigger: "blur",
        },
        {
            pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,
            message: "密码包含至少一个字母和一个数字",
            trigger: "blur",
        },
    ],
}
</script>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login_form {
        position: relative;
        width: 60%;
        top: 30vh;
        background: url("@/assets/images/login_form.png") no-repeat;
        background-size: cover;
        padding: 7%;
        border-radius: 16px;

        h1 {
            color: rgb(52, 173, 244);
            font-size: 35px;
        }

        h2 {
            font-size: 18px;
            color: rgb(52, 173, 244);
            margin: 30px 0px;
        }

        .login_btn {
            width: 100%;
            margin: 10px;
            font-size: 16px;
        }

        .el-input {
            margin: 5px;
            height: 30px;
        }

        .register {
            font-size: 16px;
            float: left;
            color: whitesmoke;
            text-decoration: underline;
        }

        .forget {
            font-size: 16px;
            float: right;
            color: whitesmoke;
            text-decoration: underline;
        }

    }
}
</style>