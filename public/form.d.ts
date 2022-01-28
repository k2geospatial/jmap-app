declare interface JFormParams {
  formMetaData: JFormMetaData
  defaultValueById: { [id: string]: any }
  viewId: number
  hideClearButton?: boolean
  buttonLabelSubmit?: string
  buttonLabelCancel?: string
  buttonLabelClear?: string
  formIsDestroyedAfterSubmit?: boolean
  isSearch?: boolean
  smallScreenDisplay?: boolean
  disableSubmit?: boolean
  submitErrors?: string[]
  validate: (values: any) => { [key: string]: string }
  onSubmit: (values: any) => void | string | Promise<any>
  onCancel?: () => void
  onReset?: () => void
}
