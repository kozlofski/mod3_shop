import { FieldError } from "react-hook-form"

// sizes
type XXLtoXS = "xxl" | "xl" | "l" | "m" | "s" | "xs"
type LtoS = "l" | "m" | "s"
type LtoM = "l" | "m"
type MtoS = "m" | "s"

/* ALERTS */
export type AlertType = "default" | "success" | "danger" | "warning" | "primary"
export type AlertSize = LtoS

/* ALERT BUTTONS */
export type AlertButtonColor = AlertType
export type AlertButtonVariant = "stroke" | "full" | "naked"

/* PRIMARY BUTTONS */
export type ButtonVariant = "stroke" | "full" | "naked" | "white"
export type ButtonSize = XXLtoXS

/* DROPDOWN */
export type DropdownSize = XXLtoXS

/* BADGE */
export type BadgeColor = "default" | "success" | "failed" | "pending" | "payment"
export type BadgeSize = LtoS
export type BadgeType = "fill" | "stroke" | "accent"

export type InputData = {
    placeholder: string,
    error: string | FieldError,
    label: string,
    helper: string,
}

export type ProductForCard = {
    name: string,
    id: number,
    price: string,
    categories: { name: string }[],
    imageUrl: string,
}



export type ToggleComponentSize = MtoS


export type ComponentSize = XXLtoXS


export type CheckboxSize = LtoS

export type ProgressBarSize = LtoM

export type ToggleState = "on" | "off"
// export type AccordionInitState = "opened" | "closed"