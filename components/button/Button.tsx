import React from "react";

interface ButtonProps {
    children: React.ReactNode,
    className?: string,
    disabled?: true,
    onClick?: () => void
}

const Button = ({ children, className, disabled }: ButtonProps) => {
    return (<button className={className} disabled={disabled}>{children}</button>
    )
}

export default Button