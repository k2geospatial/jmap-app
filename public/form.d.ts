declare interface JFormParams {
  id: JId
  label: string
  schema: JFormSchema
  uiSchema: JFormUISchema
  validationRules?: JFormValidationRules,
  readOnly?: boolean
  defaultValueById?: { [id: string]: any }
  viewId?: number
  hideClearButton?: boolean
  buttonLabelSubmit?: string
  buttonLabelCancel?: string
  buttonLabelClear?: string
  formIsDestroyedAfterSubmit?: boolean
  isSearch?: boolean
  smallScreenDisplay?: boolean
  disableSubmit?: boolean
  submitErrors?: string[]
  messageToDisplay?: string
  validate: (values: any, formMetada: JFormMetaData) => { [key: string]: string }
  onSubmit: (values: any, formMetada: JFormMetaData) => void | string | Promise<any>
  onCancel?: () => void
  onReset?: () => void
}
