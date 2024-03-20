<template>
  <div class="realty-card">
    <NuxtLink class="realty-card__link" :to="`/${slug}`" target="_blank">
      <div class="realty-card__image">
        <VImg :src="image" height="186" cover />
        <EntityRealtyHousingClassChip v-if="housingClass" class="realty-card__chip">
          {{ housingClass }}
        </EntityRealtyHousingClassChip>
      </div>
      <div class="realty-card__content">
        <div class="realty-card__title">{{ name }}</div>
        <div class="realty-card__deadline">Срок сдачи: {{ deadline }}</div>
        <div class="realty-card__location">
          <div class="realty-card__street">{{ address }}</div>
          <div class="realty-card__region">{{ region }} район</div>
          <div v-for="metroItem in metro" :key="metroItem.slug" class="realty-card__metro">
            <NuxtIcon
              class="realty-card__metro-icon"
              :style="`color: ${metroItem.color}`"
              name="metro"
            />
            <div class="realty-card__metro-name">{{ metroItem.name }}</div>
            <div class="realty-card__metro-run">{{ metroItem.onfoot }} мин.</div>
            <NuxtIcon class="realty-card__metro-run-icon" name="run" />
          </div>
        </div>
        <div class="realty-card__apartments">
          <div v-for="info in apartmentInfo" :key="info.name" class="realty-card__apartment-row">
            <div class="realty-card__apartment-col">{{ info.name }}</div>
            <div class="realty-card__apartment-col">
              <template v-if="info.area">от {{ info.area }} м²</template>
            </div>
            <div class="realty-card__apartment-col">
              <template v-if="info.area">от {{ info.price }} млн. ₽</template>
              <span v-else>нет в наличии</span>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { RealtyCardProps } from '@/entities/realty/interfaces/RealtyCard'

defineProps<RealtyCardProps>()
</script>

<style scoped lang="scss">
.realty-card {
  &__link {
    text-decoration: none;
  }

  &__image {
    position: relative;
  }

  &__chip {
    position: absolute;
    top: 12px;
    left: 12px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 8px 12px;
    border: 1px solid $border;
  }

  &__title {
    @include text;
    line-height: 100%;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.04em;
    color: $text;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__deadline {
    margin-top: 4px;
    @include text;
    color: $text--lighten-4;
  }

  &__location {
    margin-top: 16px;

    & > * {
      margin-bottom: 6px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }

  &__street {
    @include text;
    color: $text;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__region {
    @include text;
    color: $text;
  }

  &__metro {
    display: flex;
    align-items: flex-start;
  }

  &__metro-icon :deep(svg) {
    width: 14px;
    height: 14px;
  }

  &__metro-name {
    margin-left: 4px;
    @include text;
    color: $text;
  }

  &__metro-run {
    margin-left: 3px;
    @include text;
    color: $text--lighten-2;
  }

  &__metro-run-icon {
    margin-left: 1px;

    :deep(svg) {
      width: 16px;
      height: 16px;
      color: $text--lighten-2;
    }
  }

  &__apartments {
    margin-top: 16px;
    @include text;
    color: $text;
  }

  &__apartment-row {
    display: flex;
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }

  &__apartment-col {
    flex-grow: 1;

    &:first-of-type {
      flex-basis: 27%;
    }

    &:nth-of-type(2) {
      flex-basis: 33%;
    }

    &:last-of-type {
      flex-basis: 40%;
      text-align: right;
    }

    span {
      color: $text--lighten-4;
    }
  }
}
</style>
