<template>
  <VChip class="realty-housing-class-chip">
    <slot />
  </VChip>
</template>

<script setup lang="ts">
import type { RealtyHousingClassChip } from '@/entities/realty/interfaces/RealtyHousingClassChip'

defineProps<RealtyHousingClassChip>()
</script>

<style scoped lang="scss">
.realty-housing-class-chip {
  --v-chip-height: 21px;
  padding: 0px 10px;
  border: 1px solid $primary;
  border-radius: 10px;
  background-color: $white;
  @include text;
  line-height: 100%;
  font-size: 10px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: $text;

  :deep(.v-chip__underlay) {
    display: none;
  }
}
</style>
