import { InputData } from '@/types/componentTypes'
import React from 'react'

interface InputProps {
    // children: React.ReactNode,
    id: string,
    value: string, // to be replaced by state or sth from form hook
    data: InputData,
    className?: string,
    disabled?: true,
    size: string,
    // children: React.ReactNode,
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
    text?: string,
    onClick?: () => void
}

const Input = ({ value, data: { placeholder, error, label, helper }, id, className, disabled, size, leftIcon, text, rightIcon }: InputProps) => {
    return (
        <div className={`input-container`}>
            <label className={`input-label input-label-${size}`}>{label}</label>
            <div className={`framedComponent input-wrapper input-${error.length > 0 ? "error" : "valid"}-wrapper`}>
                {leftIcon && <div className={`input-icon input-icon-${size}`}>{leftIcon}</div> || ""}
                <input
                    id={id}
                    type="text"
                    disabled={disabled}
                    className={`input input-${size} ${className || ""}`}
                    placeholder={placeholder}
                    // value={value}
                    onClick={undefined}
                />
                {text && <div className={`inner-input-text inner-input-text-${size}`}>{text}</div> || ""}
                {rightIcon && <div className={`input-icon input-icon-${size} ${text && "input-right-icon-nextToText"}`}>{rightIcon}</div> || ""}
            </div>
            <p className={`input-lower-message ${error.length > 0 ? "input-error-message" : "input-helper-message"}`}>
                {error.length > 0 ? error : helper}
            </p>

        </div>
    )
}

export default Input