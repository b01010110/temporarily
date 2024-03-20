import type { VTextarea } from 'vuetify/components'

type VTextareaProps = VTextarea['$props']

export interface Textarea extends /* @vue-ignore */ VTextareaProps {
  size?: 'small' | 'default' | 'large'
}
