<template>
    <div class="box">

        <el-result sub-title="Sorry, request error">
            <template #icon>
                <el-image src="/src/assets/images/404.png"/>
            </template>
            <template #extra>
                <el-link type="info" :icon="House" @click="goHome">
                    Click Here Back To Home
                </el-link>
            </template>
        </el-result>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { House } from '@element-plus/icons-vue';
let $router = useRouter();
const goHome = () => {
    $router.push('/');
}
</script>

<style scoped lang="scss">
.box {
    width: 100vw;
    height: 100vh;
    background: rgb(140, 200, 202);
    display: flex;
    justify-content: center;
}
</style>