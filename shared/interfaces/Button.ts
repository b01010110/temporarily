import type { VBtn } from 'vuetify/components'

type VBtnProps = VBtn['$props']

export interface Button extends /* @vue-ignore */ VBtnProps {
  size?: 'small' | 'default' | 'large'
  variation?: 'primary' | 'primary-outlined'
  nuxtIcon?: string
}
