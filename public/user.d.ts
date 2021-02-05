declare interface JAppUserAction {
  id: string
  label: string | JTranslationItem
  icon: string
  isHelp?: boolean
  href?: string
  disabled?: boolean
  onClick?: () => void
}
