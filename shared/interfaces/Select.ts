import type { VSelect } from 'vuetify/components'

type VSelectProps = VSelect['$props']

export interface Select extends /* @vue-ignore */ VSelectProps {
  size?: 'small' | 'default' | 'large'
}
