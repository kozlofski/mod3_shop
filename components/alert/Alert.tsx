import React from 'react'

interface AlertProps {
    children: React.ReactNode,
    className?: string,
    // onClick?: () => void
}

const Alert = ({ children, className }: AlertProps) => {
    return (
        <div className={className}>{children}</div>
    )
}

export default Alert