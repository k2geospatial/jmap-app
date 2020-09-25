declare interface JAppUserAction {
  label: string
  icon: string
  isHelp?: boolean
  href?: string
  disabled?: boolean
  onClick?: () => void
}
