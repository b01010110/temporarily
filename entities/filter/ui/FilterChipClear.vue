<template>
  <VBtn class="chip-clear" flat :ripple="false">
    <slot />
    <NuxtIcon class="chip-clear__icon" name="delete" />
  </VBtn>
</template>

<script setup lang="ts">
import type { FilterChipClear } from '@/entities/filter/interfaces/FilterChipClear'

defineProps<FilterChipClear>()
</script>

<style scoped lang="scss">
.chip-clear {
  --v-btn-height: 32px;
  padding: 0px 9px 0px 12px;
  border: 1px solid $border;
  border-radius: 6px;
  @include form__text--md;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: none;
  text-indent: initial;
  transition: none;
  color: $white;
  background-color: $grey--darken-1;

  &:hover {
    background-color: $grey--darken-2;
  }

  &:active {
    box-shadow: inset 0px 4px 8px 0px rgba(0, 0, 0, 0.4);

    :deep(.v-btn__content) {
      position: relative;
      top: -1px;
    }
  }

  :deep(.v-btn__overlay) {
    display: none;
  }

  &__icon {
    margin-left: 8px;

    :deep(svg) {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
