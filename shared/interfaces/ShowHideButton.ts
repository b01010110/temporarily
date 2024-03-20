import type { VBtn } from 'vuetify/components'

type VBtnProps = VBtn['$props']

export interface ShowHideButton extends /* @vue-ignore */ VBtnProps {
  textShow?: string
  textHide?: string
}
