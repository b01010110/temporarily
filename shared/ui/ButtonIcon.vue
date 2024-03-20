<template>
  <VBtn class="button-icon" flat icon :ripple="false">
    <NuxtIcon class="button-icon__icon" :name="icon" />
  </VBtn>
</template>

<script setup lang="ts">
import type { ButtonIcon } from '@/shared/interfaces/ButtonIcon'

defineProps<ButtonIcon>()
</script>

<style scoped lang="scss">
.button-icon {
  --v-btn-height: 20px;
  background-color: transparent;
  color: $text--lighten-1;
  transition: none;

  &:hover {
    background-color: $primary--lighten-8;
  }

  &:active {
    box-shadow: inset 0px 4px 8px 0px rgba(0, 0, 0, 0.3);

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

  &.v-btn--disabled {
    color: $disabled;
  }
}
</style>
