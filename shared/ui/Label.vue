<template>
  <div class="label" :class="[`label-size--${size}`]">
    <label class="label__label">{{ label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Label } from '@/shared/interfaces/Label'

withDefaults(defineProps<Label>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.label {
  &__label {
    display: block;
    margin-bottom: 6px;
  }

  &.label-size--small .label__label {
    @include form__label--sm;
    color: $text;
  }

  &.label-size--default .label__label {
    @include form__label--md;
    color: $text;
  }

  &.label-size--large .label__label {
    @include form__label--lg;
    color: $text;
  }
}
</style>
