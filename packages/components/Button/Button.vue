<script setup lang="ts">
import { computed, ref } from "vue";
import type { ButtonProps, ButtonEimts, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
import { ZyIcon } from "zy-element";
const btnRef = ref<HTMLButtonElement | null>(null);

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

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "primary",
  size: "default",
  nativeType: "button",
  tag: "button",
  useThrottle: true,
  throttleDelay: 500,
});
const slots = defineSlots();

const emits = defineEmits<ButtonEimts>();

defineExpose<ButtonInstance>({
  ref: btnRef,
});

const handleOnClick = (e: MouseEvent) => {
  console.log(`lzy  e:`, e);
  emits("click", e);
};
const handleBtnClickThrough = throttle(handleOnClick, props.throttleDelay);

const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}));
</script>

<template>
  <component
    :is="props.tag"
    ref="btnRef"
    :class="[
      'zy-button',
      `zy-button--${type}`,
      `zy-button--${size}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-disabled': disabled,
        'is-loading': loading,
        'is-circle': circle,
      },
    ]"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :autofocus="autofocus"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrough(e) : handleOnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <ZyIcon :icon="loadingIcon ?? 'zy-bubble-loading'" :style="iconStyle"></ZyIcon>
      </slot>
    </template>
    <ZyIcon :icon="icon" :style="iconStyle" v-if="icon && !loading"></ZyIcon>
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
