import type { Map2GisMarker, MapMarker } from '@/shared/interfaces/Map2GisMarker'

export interface Map2GisCreateMarker {
  (marker: Map2GisMarker['marker']): any
}

export interface Map2GisAddMarker {
  (marker: any): void
}

export interface Map2GisRemoveMarker {
  (marker: any): void
}

export interface Map2Gis {
  id?: string
  minZoom?: number
  maxZoom?: number
  scrollWheelZoom?: boolean
  cluster?: boolean
  hoverMarker?: MapMarker | null
  showAllMarkers?: boolean
}
