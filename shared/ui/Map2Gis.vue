<template>
  <div :id="id" class="map-2gis">
    <slot v-if="isReady" />
  </div>
</template>

<script setup lang="ts">
import { isEqual, uniqueId } from 'lodash-es'
import numeral from 'numeral'
import type { Map2Gis } from '@/shared/interfaces/Map2Gis'
import type { Map2GisMarker, MapMarker } from '@/shared/interfaces/Map2GisMarker'

declare global {
  interface Window {
    DG: any
    L: any
  }
}

const center = defineModel<[number, number]>('center', { default: () => [55.004819, 82.930553] })
const zoom = defineModel<number>('zoom', { default: 13 })

const props = withDefaults(defineProps<Map2Gis>(), {
  id: () => uniqueId('gis2-map-'),
  scrollWheelZoom: true,
  cluster: false,
  showAllMarkers: false,
})

const emit = defineEmits<{
  'update:center': [e: any]
  'update:zoom': [e: any]
  resize: [e: any]
  unload: [e: any]
  load: [e: any]
  click: [e: any]
  [key: string]: [e: any]
}>()

const isReady = ref(false)

const proxyMapEvents = ['resize', 'unload', 'load']

let DG: any = null
let map: any = null
let clusterLayer: any = null
let groupLayer: any = null
let localHoverMarker: any = null
let idTimerShowAllMarkers: NodeJS.Timeout

const clusterer = {
  iconCreateFunction(cluster: any) {
    const markers = cluster.getAllChildMarkers()
    const markerPrices = markers.map((marker: any) => marker.price)
    const priceMin = Math.min(...markerPrices)
    const priceMax = Math.max(...markerPrices)

    const priceText =
      priceMin === priceMax
        ? `От ${prettyNumber(priceMin)} ₽`
        : `От ${numberToMillion(priceMin)} - ${numberToMillion(priceMax)} млн. ₽`

    const html = `
      <div class="realty-map-cluster__content">${priceText}</div>
      <div class="realty-map-cluster__icon">
        <div class="realty-map-cluster__count">${markers.length}</div>
      </div>
    `
    return window.L.divIcon({ html, className: 'realty-map-cluster' })
  },
}

watch(
  () => center,
  (newValue, oldValue) => {
    if (isEqual(oldValue, newValue)) return
    map?.panTo(center.value)
  }
)

watch(
  () => zoom,
  () => {
    map?.setZoom(zoom.value)
  }
)

watch(
  () => props.minZoom,
  () => {
    map?.setMinZoom(props.minZoom)
  }
)

watch(
  () => props.maxZoom,
  () => {
    map?.setMaxZoom(props.maxZoom)
  }
)

watch(
  () => props.scrollWheelZoom,
  () => {
    if (props.scrollWheelZoom) {
      map?.scrollWheelZoom.enable()
    } else {
      map?.scrollWheelZoom.disable()
    }
  }
)

watch(
  () => props.hoverMarker,
  () => {
    changeHoverMarker()
  }
)

provide('map2Gis__createMarker', createMarker)
provide('map2Gis__addMarker', addMarker)
provide('map2Gis__removeMarker', removeMarker)

onMounted(() => {
  DG = window.DG

  DG.then(() => {
    return DG.plugin('https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js')
  }).then(init)
})

onBeforeUnmount(() => {
  isReady.value = false
  map?.remove()
})

function init() {
  map = DG.map(props.id, {
    center: center.value,
    zoom: zoom.value,
    minZoom: props.minZoom,
    maxZoom: props.maxZoom,
    scrollWheelZoom: props.scrollWheelZoom,
    fullscreenControl: false,
  })

  proxyMapEvents.forEach((event) => {
    map.on(event, (e: any) => {
      emit(event, e)
    })
  })

  map.on('moveend', (e: any) => {
    emit('update:center', latLngToCoords(e.target.getCenter()))
  })

  map.on('zoomend', (e: any) => {
    emit('update:zoom', e.target.getZoom())
  })

  map.on('click', (e: any) => {
    emit('click', e)
  })

  if (props.cluster) {
    clusterLayer = DG.markerClusterGroup(clusterer)
    map.addLayer(clusterLayer)
  } else {
    groupLayer = DG.featureGroup()
    map.addLayer(groupLayer)
  }

  if (props.hoverMarker) {
    changeHoverMarker()
  }

  isReady.value = true
}

function createMarker(marker: Map2GisMarker['marker']) {
  const coords = marker.coords
  const markerOptions: any = { riseOnHover: true }
  const divIconOptions: any = {
    className: 'realty-map-marker',
    html: '<div class="realty-map-marker__icon"></div>',
  }

  let layerData: any
  let popup: any

  if ('title' in marker) {
    divIconOptions.html = `
      <div class="realty-map-marker__content">От ${prettyNumber(marker.price)} ₽</div>
      <div class="realty-map-marker__icon"></div>
    `
    layerData = { price: marker.price }
    popup = {
      options: {
        className: 'realty-map-marker__popup',
      },
      content: `
        <div class="realty-map-marker__popup-wrap">
          <div class="realty-map-marker__popup-image">
            <img src="${marker.image}" />
          </div>
          <div class="realty-map-marker__popup-content">
            <div class="realty-map-marker__popup-name">
              <a href="${marker.link}" target="_blank">${marker.title}</a>
            </div>
            <div class="realty-map-marker__popup-address">${marker.address}</div>
            <div class="realty-map-marker__popup-price">от ${prettyNumber(marker.price)} ₽</div>
          </div>
        </div>
        <div class="realty-map-marker__popup-icon"></div>
      `,
    }
  }

  markerOptions.icon = DG.divIcon(divIconOptions)

  const layer = DG.marker(coords, markerOptions)

  if (layerData) {
    Object.keys(layerData).forEach((key) => {
      layer[key] = layerData[key]
    })
  }

  if (popup) {
    layer.bindPopup(popup.content, popup.options)
  }

  return layer
}

function createHoverMarker(marker: MapMarker) {
  const coords = marker.coords
  const markerOptions: any = { zIndexOffset: 5000 }
  const divIconOptions: any = {
    className: 'realty-map-marker',
    html: `
      <div class="realty-map-marker__content realty-map-marker__content--hover">От ${prettyNumber(marker.price)} ₽</div>
      <div class="realty-map-marker__icon realty-map-marker__icon--hover"></div>
    `,
  }

  markerOptions.icon = DG.divIcon(divIconOptions)

  return DG.marker(coords, markerOptions)
}

function addMarker(marker: any) {
  if (clusterLayer) {
    clusterLayer.addLayer(marker)
  } else {
    groupLayer.addLayer(marker)
  }

  timerFocusOnMarkers()
}

function removeMarker(marker: any) {
  if (clusterLayer) {
    if (marker) clusterLayer.removeLayer(marker)
  } else if (marker) groupLayer.removeLayer(marker)
}

function timerFocusOnMarkers() {
  if (!props.showAllMarkers) return

  clearTimeout(idTimerShowAllMarkers)
  idTimerShowAllMarkers = setTimeout(focusOnMarkers, 0)
}

function focusOnMarkers() {
  if (!props.showAllMarkers) return

  if (clusterLayer) {
    map.fitBounds(clusterLayer.getBounds())
  } else {
    map.fitBounds(groupLayer.getBounds())
  }
}

function latLngToCoords(latLng: any) {
  return [latLng.lat, latLng.lng]
}

function changeHoverMarker() {
  if (!isReady.value) return

  if (localHoverMarker) {
    map?.removeLayer(localHoverMarker)
    localHoverMarker = null
  }

  if (!props.hoverMarker) return

  localHoverMarker = createHoverMarker(props.hoverMarker)
  map?.addLayer(localHoverMarker)
}

function numberToMillion(number: number) {
  if (Number(number) === 0) return number
  return (Number(number) / 1000000).toFixed(1)
}

function prettyNumber(number: number) {
  const value = number.toString().replace(/[^\d]/g, '')
  return numeral(value).format('0,0').replaceAll(',', ' ')
}
</script>

<style lang="scss">
.map-2gis {
  width: 100%;
  height: 100%;

  .dg-zoom__in,
  .dg-zoom__out {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: $white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    padding: 0;
    margin: 0;

    &::after {
      display: none;
    }

    &:hover {
      background-color: $grey--lighten-5;
    }

    &:active {
      box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.4);
    }

    &.leaflet-disabled {
      background-color: $disabled;
      box-shadow: none;
    }
  }

  .dg-zoom__in {
    margin-bottom: 10px;

    &::before {
      cursor: pointer;
    }

    .dg-zoom__button_type_in {
      &::before,
      &::after {
        background-color: $text--lighten-1;
      }

      &:hover::before,
      &:hover::after {
        background-color: $text--lighten-1;
      }
    }

    &.leaflet-disabled {
      &::before {
        cursor: initial;
      }

      .dg-zoom__button_type_in {
        &::before,
        &::after {
          background-color: $text--lighten-3;
        }

        &:hover::before,
        &:hover::after {
          background-color: $text--lighten-3;
        }
      }
    }
  }

  .dg-zoom__out {
    .dg-zoom__button_type_out {
      &::after {
        width: 14px;
        box-shadow: none;
        background-color: $text--lighten-1;
      }

      &:hover::after {
        background-color: $text--lighten-1;
      }
    }

    &.leaflet-disabled {
      .dg-zoom__button_type_out {
        &::after {
          background-color: $text--lighten-3;
        }

        &:hover::after {
          background-color: $text--lighten-3;
        }
      }
    }
  }

  .dg-zoom__button {
    background: none !important;
    box-shadow: none !important;

    &:hover {
      background: none !important;
      box-shadow: none !important;
    }
  }
}

.realty-map-marker {
  margin-top: 0 !important;
  margin-left: 0 !important;
  width: 0 !important;
  height: 0 !important;

  &__content {
    position: absolute;
    transform: translate(-50%, -180%);
    white-space: nowrap;
    @include map-text;
    color: $text;
    padding: 5px 10px;
    background-color: #fff;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4));

    &::before {
      position: absolute;
      left: calc(50% - 6px);
      bottom: -11px;
      content: '';
      border: 6px solid transparent;
      border-top: 6px solid #fff;
    }

    &--hover {
      filter: drop-shadow(0px 2px 4px rgba(0, 140, 254, 0.75));
    }
  }

  &__icon {
    position: absolute;
    top: -9px;
    left: -9px;

    &::before {
      display: block;
      content: '';
      width: 18px;
      height: 18px;
      background-image: url('/images/map-point.svg');
      background-size: 18px 18px;
    }

    &--hover {
      &::before {
        background-image: url('/images/map-point-hover.svg');
      }
    }
  }

  &__popup {
    bottom: 19px !important;

    & .leaflet-popup-content {
      margin: 0 !important;
    }

    & .leaflet-popup-content-wrapper {
      overflow: initial;
      background-color: transparent;
      border-radius: 4px;

      &::before {
        display: none;
      }
    }

    & a.leaflet-popup-close-button {
      top: 0 !important;
      right: 0 !important;
      width: 24px !important;
      height: 24px !important;
      line-height: 20px !important;

      &::after {
        width: 30px !important;
        height: 30px !important;
      }
    }

    & .leaflet-popup-tip-container_svg {
      display: none !important;
    }

    &-wrap {
      display: flex;
      padding: 15px;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 4px;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4));

      &::before {
        position: absolute;
        left: calc(50% - 9px);
        bottom: -17px;
        content: '';
        border: 9px solid transparent;
        border-top: 9px solid rgba(255, 255, 255, 0.9);
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;
    }

    &-image {
      width: 80px;
      height: 60px;

      img {
        width: 80px;
        height: 60px;
        object-fit: cover;
        border-radius: 4px;
      }
    }

    &-name {
      @include map-title;
      color: $text;
      white-space: nowrap;

      a {
        color: $primary;
        text-decoration: none;
      }
    }

    &-address {
      @include map-text;
      color: $text;
    }

    &-price {
      @include map-text;
      color: $text;
    }

    &-icon {
      position: absolute;
      bottom: -28px;
      left: calc(50% - 9px);

      &::before {
        display: block;
        content: '';
        width: 18px;
        height: 18px;
        background-image: url('/images/map-point.svg');
        background-size: 18px 18px;
      }
    }
  }
}

.realty-map-cluster {
  margin-top: 0 !important;
  margin-left: 0 !important;
  width: 0 !important;
  height: 0 !important;

  &__content {
    position: absolute;
    transform: translate(-50%, -210%);
    white-space: nowrap;
    @include map-text;
    color: $text;
    padding: 5px 10px;
    background-color: #fff;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4));

    &::before {
      position: absolute;
      left: calc(50% - 6px);
      bottom: -11px;
      content: '';
      border: 6px solid transparent;
      border-top: 6px solid #fff;
    }
  }

  &__icon {
    position: absolute;
    top: -16px;
    left: -16px;

    &::before {
      display: block;
      content: '';
      width: 32px;
      height: 32px;
      background-image: url('/images/map-cluster.svg');
      background-size: 32px 32px;
    }
  }

  &__count {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @include map-text;
    color: $text;
  }
}
</style>
