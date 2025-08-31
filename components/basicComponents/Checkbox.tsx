"use client"

import { CheckboxSize } from '@/types/componentTypes'
import React, { useState } from 'react'
import { Tick } from '../icons/icons'

interface CheckboxProps {
    id: string,
    label: string,
    size: CheckboxSize,
    className?: string,
}

const Checkbox = ({ size, className, id, label }: CheckboxProps) => {
    const [checked, setChecked] = useState(false)

    const handleOnClick = () => { setChecked(prev => !prev) }

    return (
        <div className={`checkbox-with-label`}>
            <div className={`checkbox-wrapper checkbox-wrapper-${size}`}>
                <input
                    id={id}
                    type="checkbox"
                    onClick={handleOnClick}
                >
                </input>
                <div className={`${checked ? "checkbox-checked" : "framedComponent"} checkbox checkbox-${size} ${className || ""}`}>
                    {checked && <div className={`tick tick-${size}`}><Tick /></div>}
                </div>
            </div>
            <label className={`checkbox-label checkbox-label-${size}`} htmlFor={id}>{label}</label>
        </div>

    )
}

export default Checkbox