<template>
  <VContainer class="realty-filter">
    <VRow>
      <VCol class="realty-filter__content" xl="8" offset-xl="2">
        <FeatureRealtyFilterSettlement class="realty-filter__settlement" />
        <FeatureRealtyFilterRealty class="realty-filter__realty" />
        <FeatureRealtyFilterRegion class="realty-filter__region" />
        <FeatureRealtyFilterMetro class="realty-filter__metro" />
        <FeatureRealtyFilterApartment class="realty-filter__apartment" />
        <FeatureRealtyFilterArea class="realty-filter__area" />
        <FeatureRealtyFilterPrice class="realty-filter__price" />
        <FeatureRealtyFilterDeadline class="realty-filter__deadline" />
        <WidgetRealtyFilterChips class="realty-filter__chips" />
        <div v-for="n in 5" :key="n" :class="`realty-filter__divider-${n}`"></div>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.realty-filter {
  &__content {
    display: flex;
    flex-wrap: wrap;

    & > [class*='divider'] {
      width: 100%;
    }
  }

  &__settlement {
    order: 1;
    flex-basis: 200px;
    margin-right: 18px;
  }

  &__realty {
    order: 2;
    flex-basis: 306.5px;
    margin-right: 18px;
  }

  &__region {
    order: 3;
    flex-basis: 306.5px;
    margin-right: 18px;
  }

  &__metro {
    order: 4;
    flex-grow: 1;
  }

  &__divider-1 {
    order: 5;
    margin-bottom: 12px;
  }

  &__apartment {
    order: 6;
    margin-right: 18px;
  }

  &__area {
    order: 7;
    flex-basis: 180px;
    margin-right: 18px;
  }

  &__price {
    order: 8;
    flex-basis: 220px;
    margin-right: 18px;
  }

  &__deadline {
    order: 9;
    flex-grow: 1;
  }

  &__divider-2 {
    order: 10;
    margin-bottom: 12px;
  }

  &__chips {
    order: 11;
    margin-top: 8px;
  }

  @include breakpoint('md-and-down') {
    &__realty {
      flex-grow: 1;
      flex-basis: 250px;
    }

    &__region {
      flex-grow: 1;
      flex-basis: 250px;
      margin-right: 0px;
    }

    &__divider-1 {
      order: 4;
    }

    &__deadline {
      order: 5;
      flex-grow: 1;
      margin-right: 18px;
    }

    &__metro {
      order: 6;
      flex-grow: 1;
    }

    &__divider-2 {
      order: 7;
    }

    &__apartment {
      order: 8;
    }

    &__area {
      order: 9;
      flex-grow: 1;
    }

    &__price {
      order: 10;
      flex-grow: 1;
      margin-right: 0px;
    }

    &__divider-3 {
      order: 11;
      margin-bottom: 12px;
    }

    &__chips {
      order: 12;
    }
  }

  @include breakpoint('sm') {
    &__settlement {
      margin-right: 0px;
    }

    &__divider-1 {
      order: 2;
    }

    &__realty {
      order: 3;
    }

    &__region {
      order: 4;
    }

    &__divider-2 {
      order: 5;
    }

    &__deadline {
      order: 6;
    }

    &__metro {
      order: 7;
    }

    &__divider-3 {
      order: 8;
    }

    &__apartment {
      order: 9;
    }

    &__divider-4 {
      order: 10;
      margin-bottom: 12px;
    }

    &__area {
      order: 11;
      flex-grow: 0;
    }

    &__price {
      order: 12;
      flex-grow: 0;
    }

    &__divider-5 {
      order: 13;
      margin-bottom: 12px;
    }

    &__chips {
      order: 14;
      margin-top: 12px;
    }
  }
}
</style>
