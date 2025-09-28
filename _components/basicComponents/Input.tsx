import { InputData } from '@/types/componentTypes'
import React from 'react'

interface InputProps {
    id: string,
    value?: string,
    data: InputData,
    className?: string,
    disabled?: boolean,
    size: string,
    type: string,
    children?: React.ReactNode,
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
    text?: string,
    onClick?: () => void
}

const Input = ({ value, data: { placeholder, error, label, helper }, id, className, type, children, disabled, size, leftIcon, text, rightIcon, ...rest }: InputProps) => {
    return (
        <div className={`input-container ${className}`}>
            <label className={`input-label input-label-${size}`}>{label}</label>
            <div className={`framedComponent input-wrapper input-${typeof error === 'string' && error.length > 0 ? "error" : "valid"}-wrapper w-fit`}>
                {leftIcon && <div className={`input-icon input-icon-${size}`}>{leftIcon}</div> || ""}
                <input
                    id={id}
                    type={type}
                    disabled={disabled}
                    className={`input input-${size}`}
                    placeholder={placeholder}
                    value={value}
                    onClick={undefined}
                    {...rest}
                />
                {children && <div className={`inner-input-text inner-input-text-${size}`}>{children}</div>}
                {text && <div className={`inner-input-text inner-input-text-${size}`}>{text}</div> || ""}
                {rightIcon && <div className={`input-icon input-icon-${size} ${text && "input-right-icon-nextToText"}`}>{rightIcon}</div> || ""}
            </div>
            <p className={`input-lower-message ${typeof error === 'string' && error.length > 0 ? "input-error-message" : "input-helper-message"}`}>
                {typeof error === 'string' && error.length > 0 ? error : helper}
            </p>

        </div>
    )
}

export default Input