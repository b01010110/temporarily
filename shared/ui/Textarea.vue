<template>
  <VTextarea
    class="textarea"
    :class="[`textarea-size--${size}`]"
    variant="outlined"
    hide-details="auto"
  />
</template>

<script setup lang="ts">
import type { Textarea } from '@/shared/interfaces/Textarea'

withDefaults(defineProps<Textarea>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.textarea {
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

  &.textarea-size--small {
    :deep(.v-field__input) {
      --v-field-input-padding-top: 11px;
      --v-field-input-padding-bottom: 10px;
    }

    :deep(.v-field) {
      --v-field-padding-start: 16px;
      --v-field-padding-end: 16px;
    }

    :deep(.v-field__input) {
      @include form__text--sm;
    }
  }

  &.textarea-size--default {
    :deep(.v-field__input) {
      --v-field-input-padding-top: 12px;
      --v-field-input-padding-bottom: 12px;
    }

    :deep(.v-field) {
      --v-field-padding-start: 16px;
      --v-field-padding-end: 16px;
    }

    :deep(.v-field__input) {
      @include form__text--md;
    }
  }

  &.textarea-size--large {
    :deep(.v-field__input) {
      --v-field-input-padding-top: 14px;
      --v-field-input-padding-bottom: 14px;
    }

    :deep(.v-field) {
      --v-field-padding-start: 16px;
      --v-field-padding-end: 16px;
    }

    :deep(.v-field__input) {
      @include form__text--lg;
    }
  }

  :deep(.v-field__input) {
    mask-image: none;
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
