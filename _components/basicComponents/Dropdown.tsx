"use client"

import React, { useState } from 'react'
import { FilterArrow, Tick } from '../icons/icons'

interface DropdownProps {
    // children: React.ReactNode,
    options: string[],
    className: string,
    disabled?: boolean,
    inputDropdown?: boolean,
    onClick?: () => void
}

//onClick={() => setSelected(idx)}

const Dropdown = ({ className, disabled, options, inputDropdown }: DropdownProps) => {
    const [opened, setOpened] = useState(false)
    const [selected, setSelected] = useState(0)

    const setOptionsVisibility = () => setOpened(prev => !prev)

    const handleClickOption = (index: number) => {
        setSelected(index)
        setOpened(false)
    }

    return (
        <div className={`dropdown`}>
            <div className={`${inputDropdown || "framedComponent"} dropdown-bar dropdown-bar-${className}`} onClick={setOptionsVisibility}>
                <h2 className="accHeader" >{options[selected]}</h2>
                <div className={`${opened ? "rotate-540 duration-300" : "duration-300"}`}>
                    <FilterArrow />
                </div>
            </div>
            {opened && options.length > 0 &&
                <ul className={`framedComponent dropdown-options dropdown-options-${className}`}>
                    {options.map((option, idx) => {
                        return (<li
                            className={`dropdown-option dropdown-option-${className} ${idx === selected && "option-selected"}`}
                            key={idx}
                            onClick={() => handleClickOption(idx)} >
                            {option}
                            {idx === selected && <span className="w-[16px]"><Tick /></span>}
                        </li>
                        )
                    })
                    }
                </ul>}

        </div>
    )
}

export default Dropdown