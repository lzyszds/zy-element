<script setup lang="ts">
import { ZyIcon } from "@zy-element/components/Icon";
</script>

<template>
  <zy-button :loading="true" type="primary"> 你好 </zy-button>
  <ZyIcon icon="zy:adobe-after-effects" spin color="qw" :speedspin="6" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.2em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
