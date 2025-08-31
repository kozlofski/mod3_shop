"use client"

import React, { useEffect, useState } from 'react'
import { Tick } from '../icons/icons'

interface FilterCheckboxProps {
    name: string,
    className?: string,
    filterSettings: Record<string, boolean>,
    onClickProps?: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
}

const getCheckboxClass = (checked: boolean) => {
    if (checked) return "bg-checked"
    return "framedComponent"
}

const FilterCheckbox = ({ name, className, filterSettings, onClickProps }: FilterCheckboxProps) => {
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

    // #TODO move simple checkbox to separate component
    return (
        <div
            className={`${getCheckboxClass(checked)} checkbox ${className || ""}`}
            onClick={handleOnClick}
        >
            {checked && <Tick />}
        </div>
    )
}

export default FilterCheckbox