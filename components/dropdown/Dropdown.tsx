import React from 'react'

interface DropdownProps {
    children: React.ReactNode,
    className?: string,
    disabled?: true,
    onClick?: () => void
}

const Dropdown = ({ children, className, disabled }: DropdownProps) => {
    return (
        <ul></ul>
    )
}

export default Dropdown