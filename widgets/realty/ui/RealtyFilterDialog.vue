<template>
  <UIDialog v-model="isOpened" class="realty-filter-dialog" title="Фильтр по Новостройкам">
    <div class="realty-filter-dialog__content">
      <FeatureRealtyFilterSettlement />
      <FeatureRealtyFilterRealty />
      <FeatureRealtyFilterRegion />
      <FeatureRealtyFilterMetro />
      <FeatureRealtyFilterDeadline />
      <FeatureRealtyFilterApartment mobile />
      <FeatureRealtyFilterArea class="realty-filter-dialog__area" />
      <FeatureRealtyFilterPrice class="realty-filter-dialog__price" />
      <WidgetRealtyFilterChips class="realty-filter-dialog__chips" />
      <div class="realty-filter-dialog__buttons">
        <FeatureRealtyFilterButtonApply />
      </div>
    </div>
  </UIDialog>
</template>

<script setup lang="ts">
import { useRealtyFilterStore } from '@/entities/realty/stores/filter'

const realtyFilterStore = useRealtyFilterStore()
const { isOpened } = storeToRefs(realtyFilterStore)
</script>

<style scoped lang="scss">
.realty-filter-dialog {
  &__content {
    padding: 0px 12px;

    & > * {
      margin-bottom: 12px;
    }
  }

  &__area,
  &__price {
    margin-bottom: 24px;
  }

  &__chips {
    margin-top: 30px;
  }

  &__buttons {
    text-align: right;
  }
}
</style>
