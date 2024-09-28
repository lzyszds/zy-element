<script setup lang="ts">
/**
 * Button.vue 是一个简单的按钮组件
 * Button.test.ts 是 Button.vue 的测试文件
 * types.ts 是 Button.vue 的类型定义文件
 * style.css 是 Button.vue 的样式文件
 * constants.ts 是 Button.vue 的常量文件
 */

defineOptions({
  name: "ZyButton",
});
</script>

<template>
  <button style="background-color: #409eff; color: #fff">
    <span>加载中</span>
    <slot></slot>
  </button>
</template>
