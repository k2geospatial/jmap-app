declare interface JAppUserAction {
  id: string
  label: string
  icon: string
  isHelp?: boolean
  href?: string
  disabled?: boolean
  onClick?: () => void
}
