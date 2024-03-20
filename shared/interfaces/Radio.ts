import type { VRadio } from 'vuetify/components'

type VRadioProps = VRadio['$props']

export interface Radio extends /* @vue-ignore */ VRadioProps {
  size?: 'small' | 'default' | 'large'
}
