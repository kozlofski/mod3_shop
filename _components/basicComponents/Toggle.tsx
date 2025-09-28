"use client"

import { ToggleComponentSize, ToggleState } from '@/types/componentTypes'
import React, { useState } from 'react'

interface ToggleProps {
    id: string,
    size: ToggleComponentSize,
    className?: string,
}

const initialState: ToggleState = "off"

const Toggle = ({ id, size, className }: ToggleProps) => {
    const [toggleState, setToggleState] = useState<ToggleState>(initialState)

    const handleClickToggle = () => {
        if (toggleState === "on") setToggleState("off")
        else setToggleState("on")
    }

    return (
        <div id={id} className={`${className || ""} toggle toggle-${size}`}
            onClick={handleClickToggle}>
            <div className={`${className || ""} dot dot-${toggleState}`} ></div>
        </div>
    )
}

export default Toggle