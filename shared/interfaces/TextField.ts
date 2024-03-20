import type { VTextField } from 'vuetify/components'

type VTextFieldProps = VTextField['$props']

export interface TextField extends /* @vue-ignore */ VTextFieldProps {
  size?: 'small' | 'default' | 'large'
}
