import React from "react";

interface ButtonProps {
    children: React.ReactNode,
    className: string,
    disabled?: true,
    onClick?: () => void
}

// #todo refactor className. Not necessary to write class 'btn' on parent

const Button = ({ children, className, disabled, onClick }: ButtonProps) => {
    return (<button className={className} disabled={disabled} onClick={onClick}>{children}</button>
    )
}

export default Button