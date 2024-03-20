<template>
  <VTextField
    class="text-field"
    :class="[`text-field-size--${size}`]"
    variant="outlined"
    hide-details="auto"
  />
</template>

<script setup lang="ts">
import type { TextField } from '@/shared/interfaces/TextField'

withDefaults(defineProps<TextField>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.text-field {
  :deep(.v-field__input) {
    color: $text;

    &::placeholder {
      color: $text--lighten-2;
      opacity: 1;
    }

    &:disabled {
      color: $disabled;

      &::placeholder {
        color: $disabled;
      }
    }
  }

  &.text-field-size--small {
    :deep(.v-field__input) {
      --v-input-control-height: 34px;
      --v-field-input-padding-top: 0px;
      --v-field-input-padding-bottom: 0px;
    }

    :deep(.v-field) {
      --v-field-padding-start: 16px;
      --v-field-padding-end: 16px;
    }

    :deep(.v-field__input) {
      @include form__text--sm;
    }
  }

  &.text-field-size--default {
    :deep(.v-field__input) {
      --v-input-control-height: 38px;
      --v-field-input-padding-top: 0px;
      --v-field-input-padding-bottom: 0px;
    }

    :deep(.v-field) {
      --v-field-padding-start: 16px;
      --v-field-padding-end: 16px;
    }

    :deep(.v-field__input) {
      @include form__text--md;
    }
  }

  &.text-field-size--large {
    :deep(.v-field__input) {
      --v-input-control-height: 42px;
      --v-field-input-padding-top: 0px;
      --v-field-input-padding-bottom: 0px;
    }

    :deep(.v-field) {
      --v-field-padding-start: 16px;
      --v-field-padding-end: 16px;
    }

    :deep(.v-field__input) {
      @include form__text--lg;
    }
  }

  :deep(.v-field) {
    --v-disabled-opacity: 1;
    --v-field-padding-start: 16px;
    --v-field-padding-end: 16px;
    background-color: $white;
    border-radius: 0px;
  }

  :deep(.v-field--prepended) {
    padding-inline-start: 16px;
  }

  :deep(.v-field__outline) {
    --v-field-border-width: 1px;
    --v-field-border-opacity: 1;
    color: $border-form;
  }

  :deep(.v-field--disabled .v-field__outline) {
    color: $disabled;
  }

  :deep(.v-field--focused .v-field__outline) {
    --v-field-border-width: 1px;
    color: $primary;
  }

  :deep(.v-field.v-field--focused:hover .v-field__outline) {
    --v-field-border-width: 1px;
    color: $primary;
  }

  :deep(.v-field:hover .v-field__outline) {
    --v-field-border-width: 1px;
    color: $primary--lighten-2;
  }

  :deep(.v-field--error:not(.v-field--disabled) .v-field__outline) {
    color: $error;
  }
}
</style>
