import type { Component, Ref } from "vue"

export type Buttontype = "primary" | "success" | "warning" | "danger" | "info"
export type Buttonsize = "large" | "default" | "small"
export type ButtonNativeType = "button" | "submit" | "reset"
export interface ButtonProps {
  type?: Buttontype
  size?: Buttonsize
  nativeType?: ButtonNativeType
  tag?: string | Component
  plain?: boolean
  round?: boolean
  disabled?: boolean
  loading?: boolean
  circle?: boolean
  icon?: string
  loadingIcon?: string
  autofocus?: boolean
  useThrottle?: boolean
  throttleDelay?: number
}


export interface ButtonEimts {
  (e: "click", val: MouseEvent): void
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | null>
}
