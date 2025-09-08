import { AlertButtonColor, AlertButtonVariant, ButtonSize } from "@/types/componentTypes";
import React from "react";

interface AlertButtonProps {
    children: React.ReactNode,
    className?: string,
    size?: ButtonSize,
    color: AlertButtonColor,
    variant: AlertButtonVariant,
    disabled?: boolean,
    onClick?: () => void
}


const AlertButton = ({ children, className, size = "m", color, variant, disabled, onClick }: AlertButtonProps) => {
    return (<button
        className={`btn btn-${size} btn-alert-${color} btn-alert-${variant} ${className}`}
        disabled={disabled}
        onClick={onClick}>
        {children}
    </button>
    )
}

export default AlertButton