<template>
  <div class="header-contact-info">
    <a class="header-contact-info__link" :href="href">{{ phone }}</a>
    <div class="header-contact-info__worktime">{{ worktime }}</div>
  </div>
</template>

<script setup lang="ts">
import type { HeaderContactInfo } from '@/entities/header/interfaces/HeaderContactInfo'

const props = defineProps<HeaderContactInfo>()

const href = computed(() => {
  return 'tel:' + props.phone.replace(/[^\d+]/g, '')
})
</script>

<style scoped lang="scss">
.header-contact-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &__link {
    @include text;
    line-height: 100%;
    font-size: 18px;
    color: $text;
    text-decoration: none;
  }

  &__worktime {
    margin-top: 4px;
    @include text;
    line-height: 100%;
    font-size: 14px;
    font-weight: 300;
    color: $text;
  }

  @include breakpoint('xs') {
    &__link {
      font-size: 16px;
    }

    &__worktime {
      font-size: 12px;
    }
  }
}
</style>
