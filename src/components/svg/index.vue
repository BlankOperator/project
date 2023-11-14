<template>
    <div>
        <svg :style="{width, height}">
            <use :xlink:href="prefix + name" :fill="color"></use>
        </svg>
    </div>
</template>

<script setup lang="ts">
//接受父组件传递过来的参数
defineProps({
    //xlink-href 属性前缀
    prefix: {
        type: String,
        default: "#icon-"
    },
    //提供使用的svg的名字
    name: String,
    //提供使用的svg的颜色
    color: {
        type: String,
        default: ""
    },
    //提供使用svg的宽度
    width: {
        type: String,
        default: "20px"
    },
    //提供使用svg的高度
    height: {
        type: String,
        default: "20px"
    },
})
</script>

<style scoped>

</style>