export interface MapSimpleMarker {
  id: number
  coords: [number, number]
}

export interface MapMarker extends MapSimpleMarker {
  image: string
  title: string
  link: string
  address: string
  price: number
}

export interface Map2GisMarker {
  marker: MapMarker | MapSimpleMarker
}
