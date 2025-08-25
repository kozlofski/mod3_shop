"use client"

import React, { useEffect, useState } from 'react'
import { Tick } from '../icons/icons'

interface CheckboxProps {
    name: string,
    className?: string,
    filterSettings: Record<string, boolean>,
    onClickProps?: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
}

const getCheckboxClass = (checked: boolean) => {
    if (checked) return "bg-secondaryBtn"
    return "border border-border bg-secondaryBg"
}

const Checkbox = ({ name, className, filterSettings, onClickProps }: CheckboxProps) => {
    const [checked, setChecked] = useState(filterSettings[name])

    useEffect(() => {
        setChecked(filterSettings[name]);
    }, [filterSettings, name]);

    const handleOnClick = () => {
        let newChecked = !checked;

        const newFilterState = { ...filterSettings }
        if (name !== 'all') {
            newFilterState[name] = !checked
            newFilterState["all"] = false
        } else {
            if (newChecked === false) newChecked = true;
            else {
                for (const property in newFilterState) {
                    newFilterState[property] = false
                }
                newFilterState["all"] = true
            }
        }

        setChecked(newFilterState[name]);

        if (onClickProps) {
            onClickProps(newFilterState)
        }
    }

    return (
        <div
            className={`${getCheckboxClass(checked)} w-[32px] h-[32px] flex justify-center items-center rounded-md ${className || ""}`}
            onClick={handleOnClick}
        >
            {checked && <Tick />}
        </div>
    )
}

export default Checkbox