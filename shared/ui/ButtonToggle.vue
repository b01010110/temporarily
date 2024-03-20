<template>
  <VBtnToggle class="button-toggle" :class="[`button-toggle-size--${size}`]" :rounded="0" multiple>
    <VBtn
      v-for="item in items"
      :key="item.value"
      class="button-toggle__button"
      :ripple="false"
      :value="item.value"
    >
      {{ item.title }}
    </VBtn>
  </VBtnToggle>
</template>

<script setup lang="ts">
import type { ButtonToggle } from '@/shared/interfaces/ButtonToggle'

withDefaults(defineProps<ButtonToggle>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.button-toggle {
  border: none;

  &.button-toggle-size--small {
    height: 34px;

    .button-toggle__button {
      @include form__text--sm;
      padding: 0 18px;
    }
  }

  &.button-toggle-size--default {
    height: 38px;

    .button-toggle__button {
      @include form__text--md;
      padding: 0 18px;
    }
  }

  &.button-toggle-size--large {
    height: 42px;

    .button-toggle__button {
      @include form__text--lg;
      padding: 0 20px;
    }
  }

  &__button {
    background-color: $white;
    color: $text;
    border: 1px solid $border-form !important;
    text-transform: none;
    min-width: initial;
    margin-left: -1px;

    &:first-of-type {
      margin-left: 0px;
    }

    &:hover {
      background-color: $hover-bg;
      border-color: $primary--lighten-2 !important;
      z-index: 1;

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

    &.v-btn--active {
      background-color: $primary--lighten-7;

      & > :deep(.v-btn__overlay) {
        opacity: 0 !important;
      }

      &:hover {
        background-color: $primary--lighten-6;
      }
    }

    &.v-btn--disabled {
      background-color: $white;
      color: $disabled;
      border: 1px solid $disabled !important;

      & > :deep(.v-btn__overlay) {
        opacity: 0 !important;
      }

      &.v-btn--active {
        background-color: $primary--lighten-7;
        color: $white;
      }
    }
  }
}
</style>
