"use client"

import React, { useState } from 'react'
import { FilterArrow, Tick } from '../icons/icons'

interface DropdownProps {
    // children: React.ReactNode,
    options: string[],
    className: string,
    disabled?: true,
    onClick?: () => void
}

//onClick={() => setSelected(idx)}

const Dropdown = ({ className, disabled, options }: DropdownProps) => {
    const [opened, setOpened] = useState(false)
    const [selected, setSelected] = useState(0)

    const setOptionsVisibility = () => setOpened(prev => !prev)

    const handleClickOption = (index: number) => {
        setSelected(index)
        setOpened(false)
    }

    return (
        <div className={`dropdown`}>
            <div className={`framedComponent dropdown-bar dropdown-bar-${className}`} onClick={setOptionsVisibility}>
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
                            {idx === selected && <Tick></Tick>}
                        </li>
                        )
                    })
                    }
                </ul>}

        </div>
    )
}

export default Dropdown