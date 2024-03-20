import type { Item } from '@/shared/interfaces/Item'

export interface ButtonToggle {
  size?: 'small' | 'default' | 'large'
  items?: Item[]
}
