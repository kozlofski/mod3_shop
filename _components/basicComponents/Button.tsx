import { ButtonSize } from "@/types/componentTypes";
import React from "react";

interface ButtonProps {
    children: React.ReactNode,
    className?: string,
    size?: ButtonSize,
    variant?: string,
    disabled?: true,
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
    onClick?: () => void
}

const Button = ({ children, className, size, variant, disabled, leftIcon, rightIcon, onClick }: ButtonProps) => {
    return (<button
        className={`btn btn-${size} btn-${variant} ${className}`}
        disabled={disabled}
        onClick={onClick}>
        {leftIcon && <div className={`icon-${size}`}>{leftIcon}</div>}
        {children}
        {rightIcon && <div className={`icon-${size}`}>{rightIcon}</div>}
    </button>
    )
}

export default Button