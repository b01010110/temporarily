import { Model } from 'pinia-orm'
import type {
  RealtyCardMetro,
  RealtyCardApartmentInfo,
} from '@/entities/realty/interfaces/RealtyCard'

export default class RealtyCard extends Model {
  static entity = 'realty_cards'

  static fields() {
    return {
      id: this.number(0),
      region: this.string(''),
      slug: this.string(''),
      name: this.string(''),
      address: this.string(''),
      deadline: this.string(''),
      image: this.string(''),
      imageMap: this.string(''),
      housingClass: this.string(''),
      metro: this.attr([]),
      apartmentInfo: this.attr([]),
      coords: this.attr([]),
      price: this.number(0),
    }
  }

  declare id: number

  declare region: string

  declare slug: string

  declare name: string

  declare address: string

  declare deadline: string

  declare image: string

  declare imageMap: string

  declare housingClass: string

  declare metro: RealtyCardMetro[]

  declare apartmentInfo: RealtyCardApartmentInfo[]

  declare coords: [number, number]

  declare price: number
}
