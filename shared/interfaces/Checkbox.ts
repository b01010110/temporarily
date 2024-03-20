import type { VCheckbox } from 'vuetify/components'

type VCheckboxProps = VCheckbox['$props']

export interface Checkbox extends /* @vue-ignore */ VCheckboxProps {
  size?: 'small' | 'default' | 'large'
}
