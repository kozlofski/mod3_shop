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
    form?: string,
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: () => void
}

const Button = ({ children, className, size, variant, disabled, form, leftIcon, rightIcon, onClick, type }: ButtonProps) => {
    return (<button
        className={`btn btn-${size} btn-${variant} ${className}`}
        disabled={disabled}
        onClick={onClick}
        type={type}
        form={form}>
        {leftIcon && <div className={`icon-${size}`}>{leftIcon}</div>}
        {children}
        {rightIcon && <div className={`icon-${size}`}>{rightIcon}</div>}
    </button>
    )
}

export default Button