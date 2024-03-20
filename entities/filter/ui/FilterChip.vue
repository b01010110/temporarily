<template>
  <VBtn class="chip" flat :ripple="false">
    <slot />
    <NuxtIcon class="chip__icon" name="close" />
  </VBtn>
</template>

<script setup lang="ts">
import type { FilterChip } from '@/entities/filter/interfaces/FilterChip'

defineProps<FilterChip>()
</script>

<style scoped lang="scss">
.chip {
  --v-btn-height: 32px;
  padding: 0px 9px 0px 12px;
  border: 1px solid $border;
  border-radius: 6px;
  background-color: $grey--lighten-5;
  @include form__text--md;
  font-size: 12px;
  text-transform: none;
  text-indent: initial;
  transition: none;
  color: $text;

  &:hover {
    background-color: $grey--lighten-4;
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

  &__icon {
    color: $text--lighten-1;
    margin-left: 8px;

    :deep(svg) {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
