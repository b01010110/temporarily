<template>
  <div></div>
</template>

<script setup lang="ts">
import { isEqual } from 'lodash-es'
import type {
  Map2GisCreateMarker,
  Map2GisAddMarker,
  Map2GisRemoveMarker,
} from '@/shared/interfaces/Map2Gis'
import type { Map2GisMarker } from '@/shared/interfaces/Map2GisMarker'

const props = defineProps<Map2GisMarker>()

let layer: any = null

const createMarker = inject<Map2GisCreateMarker>('map2Gis__createMarker')!
const addMarker = inject<Map2GisAddMarker>('map2Gis__addMarker')!
const removeMarker = inject<Map2GisRemoveMarker>('map2Gis__removeMarker')!

watch(
  () => props.marker.coords,
  (newValue, oldValue) => {
    if (isEqual(oldValue, newValue)) return
    if (!layer) return
    layer.setLatLng(newValue)
  }
)

onMounted(() => {
  layer = createMarker(props.marker)
  addMarker(layer)
})

onBeforeUnmount(() => {
  removeMarker(layer)
})
</script>

<style scoped lang="scss"></style>
