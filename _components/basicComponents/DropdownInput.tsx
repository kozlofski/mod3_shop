"use client"

import React, { useState } from 'react'
import { FilterArrow, Tick } from '../icons/icons'
import { DropdownSize } from '@/types/componentTypes'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface DropdownProps {
    id: string,
    options: string[],
    className?: string,
    name: string,
    label: string,
    size: DropdownSize,
    disabled?: boolean,
    inputDropdown?: boolean,
    onClick?: () => void
}

const Dropdown = ({ id, className, disabled, label, name, options, inputDropdown, size, ...rest }: DropdownProps) => {
    const [opened, setOpened] = useState(false)
    const [selected, setSelected] = useState(0)

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { push } = useRouter();

    const setOptionsVisibility = () => setOpened(prev => !prev)

    const handleClickOption = (index: number) => {
        setSelected(index)
        setOpened(false)
        const params = new URLSearchParams(searchParams)
        params.set(name, options[index])
        push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className={`dropdown`}>
            <label className={`input-label input-label-${size}`}>{label}</label>
            <div className='relative w-full'>
                <input
                    id={id}
                    className={`${inputDropdown || "framedComponent"} dropdown-bar dropdown-bar-${size} ${className || ""} w-full`}
                    onClick={setOptionsVisibility}
                    value={options[selected]}
                    {...rest}>
                </input>
                <div className={`${opened ? "rotate-540 duration-300" : "duration-300"} absolute right-[22px] top-[24px]`}>
                    <FilterArrow />
                </div>
                {opened && options.length > 0 &&
                    <ul className={`framedComponent dropdown-options dropdown-options-${className} absolute top-[56px]`}>
                        {options.map((option, idx) => {
                            return (<li
                                className={`dropdown-option dropdown-option-${className} ${idx === selected && "option-selected"}`}
                                key={idx}
                                onClick={() => handleClickOption(idx)} >
                                {option}
                                {idx === selected && <span className="w-[16px]"><Tick /></span>}
                            </li>)
                        })
                        }
                    </ul>}
            </div>
        </div>
    )
}

export default Dropdown