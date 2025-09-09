import { BadgeColor, BadgeSize, BadgeType } from '@/types/componentTypes'
import React from 'react'

interface BadgeProps {
    children?: React.ReactNode,
    size: BadgeSize,
    color: BadgeColor,
    type: BadgeType,
    className?: string,
    disabled?: true,
    onClick?: () => void
}

const Badge = ({ children, size, color, type, className }: BadgeProps) => {
    return (
        <div className={`badge badge-${size} badge-${color} badge-${type} ${className}`}>{children}</div>
    )
}

export default Badge