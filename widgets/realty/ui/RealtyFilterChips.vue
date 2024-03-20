<template>
  <div class="realty-filter-chips">
    <FeatureRealtyFilterChip>3 комн.</FeatureRealtyFilterChip>
    <FeatureRealtyFilterChip>От 24 м²</FeatureRealtyFilterChip>
    <FeatureRealtyFilterChip>Железнодорожный</FeatureRealtyFilterChip>
    <FeatureRealtyFilterChipClear>Очистить всё</FeatureRealtyFilterChipClear>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.realty-filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @include breakpoint('xs') {
    gap: 8px;
  }
}
</style>
