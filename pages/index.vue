<template>
  <div class="page-index">
    <WidgetRealtyFilterDialog />
    <WidgetRealtyFilter class="page-index__filter" />
    <EntityRealtyContainer>
      <template #realty>
        <WidgetRealtyCards />
      </template>
      <template #map>
        <WidgetRealtyMap />
      </template>
    </EntityRealtyContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.page-index {
  @include breakpoint('xs') {
    &__filter {
      display: none;
    }
  }
}
</style>
