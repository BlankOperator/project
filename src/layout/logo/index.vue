<template>
    <div class="logo" v-if="setting.logoHidden">
        <img :src="setting.logo" alt="">
        <transition name="fade">
            <p v-if="!LayOutSettingStore.fold">{{ setting.title }}</p>
        </transition>
    </div>
</template>

<script setup lang="ts">
//引入设置标题与logo这配置文件
import setting from '@/setting';
import 'animate.css'
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore();
</script>
<script lang="ts">
export default {
    name: "Logo"
}
</script>
<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: rgb(164, 158, 97);
    display: flex;
    align-items: center;
    padding: 13px;

    img {
        width: 40px;
        height: 40px;
    }

    p {
        font-size: $base-logo-title-fontSize;
        margin-left: 15px;
    }

    .fade-enter-from {
        opacity: 0;
        transform: scale(0);
    }

    .fade-enter-active {
        transition: all .8s;
    }

    .fade-enter-to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>