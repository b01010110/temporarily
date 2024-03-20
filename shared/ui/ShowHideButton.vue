<template>
  <VBtn
    class="show-hide-button"
    :class="[`show-hide-button--${isShowed ? 'show' : 'hide'}`]"
    flat
    :ripple="false"
    @click="isShowed = !isShowed"
  >
    <span v-if="isShowed">{{ textShow }}</span>
    <span v-else>{{ textHide }}</span>
    <NuxtIcon class="show-hide-button__icon" name="chevron-down" />
  </VBtn>
</template>

<script setup lang="ts">
import type { ShowHideButton } from '@/shared/interfaces/ShowHideButton'

defineProps<ShowHideButton>()

const isShowed = defineModel<boolean>({ default: true })
</script>

<style scoped lang="scss">
.show-hide-button {
  --v-btn-height: 38px;
  padding: 0px 12px 0px 16px;
  border-radius: 8px;
  background-color: $white;
  @include form__button--md;
  text-transform: none;
  text-indent: initial;
  color: $primary;
  transition: none;

  &:hover {
    background-color: $primary--lighten-7;
  }

  &:active {
    box-shadow: inset 0px 4px 8px 0px rgba(0, 0, 0, 0.2);

    :deep(.v-btn__content) {
      position: relative;
      top: -1px;
    }
  }

  &--hide {
    .show-hide-button__icon {
      transform: rotate(180deg);
    }
  }

  :deep(.v-btn__overlay) {
    display: none;
  }

  .show-hide-button__icon {
    margin-left: 4px;
    transition: transform 0.3s;

    :deep(svg) {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
