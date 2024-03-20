<template>
  <div class="realty-cards">
    <div class="realty-cards__panel">
      <div class="realty-cards__count">{{ count }}</div>
      <FeatureRealtyFilterButtonOpen class="realty-cards__filter-button" />
    </div>
    <div class="realty-cards__content">
      <EntityRealtyCard
        v-for="realtyCard in realtyCards"
        :key="realtyCard.id"
        class="realty-cards__card"
        v-bind="realtyCard"
      />
    </div>
    <FeatureRealtyPagination class="realty-cards__pagination" />
  </div>
</template>

<script setup lang="ts">
import { useRealtyFilterStore } from '@/entities/realty/stores/filter'

const realtyFilterStore = useRealtyFilterStore()
const { realtyCards, count } = storeToRefs(realtyFilterStore)
</script>

<style scoped lang="scss">
.realty-cards {
  padding: 0px 12px;

  &__panel {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 4px;
  }

  &__filter-button {
    display: none;

    @include breakpoint('xs') {
      display: block;
    }
  }

  &__count {
    @include text;
    line-height: 100%;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: $text;
  }

  &__content {
    --realty-cards-gap: 12px;
    --realty-cards-columns: 4;
    display: flex;
    flex-wrap: wrap;
    gap: var(--realty-cards-gap);
  }

  &__card {
    flex: 0 0
      calc(
        (100% - var(--realty-cards-gap) * (var(--realty-cards-columns) - 1)) /
          var(--realty-cards-columns)
      );
    max-width: calc(
      (100% - var(--realty-cards-gap) * (var(--realty-cards-columns) - 1)) /
        var(--realty-cards-columns)
    );

    @include breakpoint('xl') {
      --realty-cards-columns: 3;
    }

    @include breakpoint('lg') {
      --realty-cards-columns: 2;
    }

    @include breakpoint('md') {
      --realty-cards-columns: 1;
    }

    @include breakpoint('sm') {
      --realty-cards-columns: 2;
    }

    @include breakpoint('xs') {
      --realty-cards-columns: 1;
    }
  }

  &__pagination {
    margin: 12px 0px 18px 0px;
  }
}
</style>
