export interface RangeInput {
  min: number
  max: number
  step: number
  size?: 'small' | 'default' | 'large'
  labelFrom?: string
  labelTo?: string
}
