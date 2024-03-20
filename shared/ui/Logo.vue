<template>
  <div class="logo">
    <img :src="`/logo-${variation}.svg`" alt="Logo" />
  </div>
</template>

<script setup lang="ts">
import type { Logo } from '@/shared/interfaces/Logo'

withDefaults(defineProps<Logo>(), {
  variation: 'dark',
})
</script>

<style scoped lang="scss">
.logo {
  width: 150px;
  height: 33px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
