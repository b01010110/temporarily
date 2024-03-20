<template>
  <UILabel label="Комнатность">
    <template v-if="mobile">
      <UISelect v-model="model" placeholder="Выбрать" :items="items" multiple />
    </template>
    <template v-else>
      <UIButtonToggle v-model="model" :items="items" />
    </template>
  </UILabel>
</template>

<script setup lang="ts">
import type { RealtyFilterApartment } from '@/features/realty/filter/interfaces/RealtyFilterApartment'
import type { Item } from '@/shared/interfaces/Item'

withDefaults(defineProps<RealtyFilterApartment>(), {
  mobile: false,
})

const model = ref([])

const items = ref<Item[]>([
  {
    title: 'Квартира',
    value: 'apartment',
  },
  {
    title: 'Студия',
    value: 'studio',
  },
  {
    title: '1',
    value: '1',
  },
  {
    title: '2',
    value: '2',
  },
  {
    title: '3',
    value: '3',
  },
  {
    title: '4',
    value: '4',
  },
  {
    title: '5+',
    value: '5+',
  },
])
</script>

<style scoped lang="scss"></style>
