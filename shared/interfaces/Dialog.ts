import type { VDialog } from 'vuetify/components'

type VDialogProps = VDialog['$props']

export interface Dialog extends /* @vue-ignore */ VDialogProps {
  title?: string
}
