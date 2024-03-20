<template>
  <VBtn class="close-button" flat icon :ripple="false" :size="size">
    <NuxtIcon class="close-button__icon" name="close" />
  </VBtn>
</template>

<script setup lang="ts">
import type { CloseButton } from '@/shared/interfaces/CloseButton'

withDefaults(defineProps<CloseButton>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.close-button {
  background-color: $grey--lighten-2;
  color: $text--lighten-1;
  transition: none;

  &:hover {
    background-color: $grey;
  }

  &:active {
    box-shadow: inset 0px 4px 8px 0px rgba(0, 0, 0, 0.4);

    :deep(.v-btn__content) {
      position: relative;
      top: -1px;
    }
  }

  &.v-btn--disabled {
    background-color: $disabled;
    color: $text--lighten-3;
  }

  :deep(.v-btn__overlay) {
    display: none;
  }

  &.v-btn--size-small {
    --v-btn-height: 20px;

    .close-button__icon :deep(svg) {
      width: 20px;
      height: 20px;
    }
  }

  &.v-btn--size-default {
    --v-btn-height: 28px;

    .close-button__icon :deep(svg) {
      width: 24px;
      height: 24px;
    }
  }

  &.v-btn--size-large {
    --v-btn-height: 36px;

    .close-button__icon :deep(svg) {
      width: 28px;
      height: 28px;
    }
  }
}
</style>
