<template>
  <div class="realty-container">
    <div class="realty-container__realty">
      <slot name="realty" />
    </div>
    <div class="realty-container__map">
      <slot name="map" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.realty-container {
  display: flex;
  position: relative;

  &__realty {
    flex-grow: 1;
    flex-basis: 50%;
    max-width: 50%;
  }

  &__map {
    flex-grow: 1;
    flex-basis: 50%;
    position: sticky;
    top: 84px;
    height: calc(100vh - 84px) !important;
    margin-top: 18px;
    margin-bottom: 18px;
    border: 1px solid $border;

    @include breakpoint('sm') {
      position: static;
      height: 600px !important;
    }

    @include breakpoint('xs') {
      position: static;
      height: 400px !important;
    }
  }

  @include breakpoint('md') {
    &__realty {
      flex-grow: 0;
      flex-basis: 320px;
      max-width: 320px;
    }

    &__map {
      flex-basis: auto;
    }
  }

  @include breakpoint('sm-and-down') {
    flex-wrap: wrap;

    &__realty {
      order: 1;
      flex-basis: 100%;
      max-width: 100%;
    }

    &__map {
      flex-basis: 100%;
      margin-top: 0px;
      margin-bottom: 12px;
    }
  }

  @include breakpoint('xs') {
    &__map {
      margin-top: 12px;
      margin-bottom: 4px;
    }
  }
}
</style>
