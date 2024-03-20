<template>
  <ClientOnly>
    <UIMap2Gis
      v-model:center="center"
      v-model:zoom="zoom"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      :scroll-wheel-zoom="!smAndDown"
      :hover-marker="hoverMarker"
      cluster
      show-all-markers
    >
      <UIMap2GisMarker v-for="marker in mapMarkers" :key="marker.id" :marker="marker" />
    </UIMap2Gis>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { MapMarker } from '@/shared/interfaces/Map2GisMarker'
import { useRealtyFilterStore } from '@/entities/realty/stores/filter'

const realtyFilterStore = useRealtyFilterStore()
const { mapMarkers } = storeToRefs(realtyFilterStore)

const { smAndDown } = useDisplay()

const center = ref<[number, number]>([55.004819, 82.930553])
const zoom = ref(12)
const minZoom = ref(3)
const maxZoom = ref(17)

const hoverMarker = ref<MapMarker | null>(null)
</script>

<style scoped lang="scss"></style>
