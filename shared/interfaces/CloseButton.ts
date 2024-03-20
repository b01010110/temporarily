import type { VBtn } from 'vuetify/components'

type VBtnProps = VBtn['$props']

export interface CloseButton extends /* @vue-ignore */ VBtnProps {
  size?: 'small' | 'default' | 'large'
}
