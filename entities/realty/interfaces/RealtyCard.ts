export interface RealtyCardMetro {
  slug: string
  name: string
  onfoot: number
  color: string
}

export interface RealtyCardApartmentInfo {
  name: string
  area?: number
  price?: number
}

export interface RealtyCardProps {
  id: number
  region: string
  slug: string
  name: string
  address: string
  deadline: string
  image: string
  housingClass: string
  metro: RealtyCardMetro[]
  apartmentInfo: RealtyCardApartmentInfo[]
}
