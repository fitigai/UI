import { Object } from 'es6-shim'

export const BUTTON_TYPE = {
  MINIMAL: 'minimal',
  PLAIN: 'plain',
  PRIMARY: 'primary'
}
export const BUTTON_TYPES = Object.values(BUTTON_TYPE)

export const ICON = {
  CHECK: 'check',
  CROSS: 'cross',
  EXCLAMATION_MARK: 'exclamation-mark',
  INFO: 'info'
}
export const ICONS = Object.values(ICON)

export const ALERT_TYPE = {
  DANGER: 'danger',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning'
}
export const ALERT_TYPES = Object.values(ALERT_TYPE)

export const SIZE = {
  XL: 'xl',
  L: 'l',
  M: 'm',
  S: 's',
  XS: 'xs'
}
export const SIZES = Object.values(SIZE)

export const INPUT_TYPE = {
  CHECKBOX: 'checkbox',
  EMAIL: 'email',
  NUMBER: 'number',
  PASSWORD: 'password',
  RADIO: 'radio',
  RANGE: 'range',
  TEXT: 'text',
  TEXTAREA: 'textarea'
}
export const INPUT_TYPES = Object.values(INPUT_TYPE)
