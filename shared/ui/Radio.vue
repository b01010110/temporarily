<template>
  <VRadio
    class="radio"
    :class="[`radio-size--${size}`]"
    :ripple="false"
    :true-icon="RadioTrueControl"
    :false-icon="RadioFalseControl"
  >
    <template v-if="$slots.label" #label>
      <slot name="label">{{ $slots.label }}</slot>
    </template>
  </VRadio>
</template>

<script setup lang="ts">
import RadioTrueControl from '@/shared/ui/RadioTrueControl.vue'
import RadioFalseControl from '@/shared/ui/RadioFalseControl.vue'

import type { Radio } from '@/shared/interfaces/Radio'

withDefaults(defineProps<Radio>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.radio {
  :deep(.v-selection-control__input:hover::before) {
    opacity: 0;
  }

  :deep(.v-label) {
    opacity: 1;
    color: $text;
  }

  &.radio-size--small {
    :deep(.v-icon) {
      width: 14px;
      height: 14px;
      font-size: 0;

      svg {
        width: 14px;
        height: 14px;
      }
    }

    :deep(.v-label) {
      @include form__text--sm;
      line-height: 101%;
    }

    :deep(.v-selection-control__wrapper) {
      --v-selection-control-size: 20px;
      margin-right: 3px;
    }
  }

  &.radio-size--default {
    :deep(.v-icon) {
      width: 16px;
      height: 16px;
      font-size: 0;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    :deep(.v-label) {
      @include form__text--md;
    }

    :deep(.v-selection-control__wrapper) {
      --v-selection-control-size: 22px;
      margin-right: 5px;
    }
  }

  &.radio-size--large {
    :deep(.v-icon) {
      width: 18px;
      height: 18px;
      font-size: 0;

      svg {
        width: 18px;
        height: 18px;
      }
    }

    :deep(.v-label) {
      @include form__text--lg;
    }

    :deep(.v-selection-control__wrapper) {
      --v-selection-control-size: 24px;
      margin-right: 5px;
    }
  }

  :deep(.v-selection-control__input > .v-icon) {
    opacity: 1;
  }

  &.v-selection-control :deep(.v-icon) {
    color: $border-form;
  }

  &.v-selection-control.v-selection-control--dirty :deep(.v-icon) {
    color: $primary;
  }

  &.v-selection-control {
    min-height: initial;
  }
}
</style>
