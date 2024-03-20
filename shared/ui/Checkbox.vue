<template>
  <VCheckbox
    class="checkbox"
    :class="[`checkbox-size--${size}`]"
    :ripple="false"
    :true-icon="CheckboxTrueControl"
    :false-icon="CheckboxFalseControl"
    hide-details="auto"
  >
    <template v-if="$slots.label" #label>
      <slot name="label">{{ $slots.label }}</slot>
    </template>
  </VCheckbox>
</template>

<script setup lang="ts">
import CheckboxTrueControl from '@/shared/ui/CheckboxTrueControl.vue'
import CheckboxFalseControl from '@/shared/ui/CheckboxFalseControl.vue'

import type { Checkbox } from '@/shared/interfaces/Checkbox'

withDefaults(defineProps<Checkbox>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.checkbox {
  :deep(.v-selection-control__input:hover::before) {
    opacity: 0;
  }

  :deep(.v-label) {
    opacity: 1;
    color: $text;
  }

  &.checkbox-size--small {
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

  &.checkbox-size--default {
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

  &.checkbox-size--large {
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

  :deep(.v-selection-control i) {
    color: $border-form;
  }

  :deep(.v-selection-control.v-selection-control--dirty i) {
    color: $primary;
  }

  :deep(.v-selection-control) {
    min-height: initial;
  }
}
</style>
