<template>
  <VBtn class="menu-button" flat icon :ripple="false">
    <NuxtIcon class="menu-button__icon" name="menu" />
  </VBtn>
</template>

<script setup lang="ts">
import type { MenuButton } from '@/shared/interfaces/MenuButton'

defineProps<MenuButton>()
</script>

<style scoped lang="scss">
.menu-button {
  --v-btn-height: 20px;
  background-color: transparent;
  color: $text--lighten-1;
  transition: none;

  &:hover {
    background-color: $primary--lighten-5;
    color: $white;
  }

  &:active {
    box-shadow: inset 0px 4px 8px 0px rgba(0, 0, 0, 0.4);

    :deep(.v-btn__content) {
      position: relative;
      top: -1px;
    }
  }

  :deep(.v-btn__overlay) {
    display: none;
  }

  &__icon :deep(svg) {
    width: 24px;
    height: 24px;
  }
}
</style>
