import type { VBtn } from 'vuetify/components'

type VBtnProps = VBtn['$props']

export interface ButtonIcon extends /* @vue-ignore */ VBtnProps {
  icon: string
}
