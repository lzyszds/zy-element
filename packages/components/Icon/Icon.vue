<script setup lang="ts">
import { Icon } from "@iconify/vue";

import { computed } from "vue";
import { ZyIconProps } from "./types";

defineOptions({
  name: "ZyIcon",
  inheritAttrs: false,
});

const props = defineProps<ZyIconProps>();
console.log("animation-duration: " + props.speedspin);
const customStyle = computed(() => ({ color: props.color ?? void 0 }));
const speedStyle = computed(() =>
  props.spin && props.speedspin ? props.speedspin * 1 + "s" : ""
);
</script>

<template>
  <Icon
    v-bind="props"
    :style="[customStyle, 'animation-duration: ' + speedStyle]"
    :class="['zy-icon', { 'zy-icon--spin': props.spin }]"
  />
</template>

<style scoped>
.zy-icon {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  transition: all 0.3s;
}

.zy-icon--spin {
  animation: zy-icon-spin 6s infinite linear;
}

@keyframes zy-icon-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
