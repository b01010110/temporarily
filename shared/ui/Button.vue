<template>
  <VBtn class="button" :class="[`button--${variation}`]" flat :ripple="false" :size="size">
    <template v-if="nuxtIcon" #prepend>
      <NuxtIcon class="button__icon" :name="nuxtIcon" />
    </template>
    <slot />
  </VBtn>
</template>

<script setup lang="ts">
import type { Button } from '@/shared/interfaces/Button'

withDefaults(defineProps<Button>(), {
  size: 'default',
  variation: 'primary',
})
</script>

<style scoped lang="scss">
.button {
  padding: 0 24px;
  border-radius: 0px;
  @include form__button--md;
  text-transform: none;
  text-indent: initial;
  transition: none;

  &--primary {
    background-color: $primary;
    color: $white;

    &:hover {
      background-color: $primary--darken-1;

      & > :deep(.v-btn__overlay) {
        opacity: 0;
      }
    }

    &:active {
      box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.4);

      :deep(.v-btn__content) {
        position: relative;
        top: -1px;
      }

      :deep(.v-btn__prepend) {
        position: relative;
        top: -1px;
      }
    }
  }

  &--primary-outlined {
    background-color: $primary--lighten-8;
    color: $text;
    border: 1px solid $primary;

    &:hover {
      background-color: $primary--lighten-7;

      & > :deep(.v-btn__overlay) {
        opacity: 0;
      }
    }

    &:active {
      box-shadow: inset 0px 4px 8px 0px rgba(0, 0, 0, 0.25);

      :deep(.v-btn__content) {
        position: relative;
        top: -1px;
      }

      :deep(.v-btn__prepend) {
        position: relative;
        top: -1px;
      }
    }
  }

  &.v-btn--size-small {
    --v-btn-height: 34px;
    padding: 0 20px;
    @include form__button--sm;

    .button__icon :deep(svg) {
      width: 20px;
      height: 20px;
    }

    :deep(.v-btn__prepend) {
      margin-inline-end: 4px;
    }
  }

  &.v-btn--size-default {
    --v-btn-height: 38px;
    padding: 0 24px;
    @include form__button--md;

    .button__icon :deep(svg) {
      width: 22px;
      height: 22px;
    }

    :deep(.v-btn__prepend) {
      margin-inline-end: 6px;
    }
  }

  &.v-btn--size-large {
    --v-btn-height: 42px;
    padding: 0 30px;
    @include form__button--lg;

    .button__icon :deep(svg) {
      width: 24px;
      height: 24px;
    }

    :deep(.v-btn__prepend) {
      margin-inline-end: 8px;
    }
  }

  &.v-btn--disabled {
    background-color: $disabled;
    color: $white;
    border: none;
  }
}
</style>
