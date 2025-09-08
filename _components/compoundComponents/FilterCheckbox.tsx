"use client"

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Checkbox from '../basicComponents/Checkbox'

interface FilterCheckboxProps {
    name: string,
    className?: string,
    filter: Record<string, boolean>,
    setFilter: Dispatch<SetStateAction<Record<string, boolean>>>
}

const FilterCheckbox = ({ name, filter, setFilter }: FilterCheckboxProps) => {
    const [checked, setChecked] = useState(filter[name])

    useEffect(() => {
        setChecked(filter[name]);
    }, [filter, name]);

    useEffect(() => {
        // useEffect for updating the filter object
        // when state of this checkbox is modified
        const newChecked = checked;
        const newFilterState = { ...filter }

        if (name !== 'all' && newChecked === true) {
            newFilterState[name] = newChecked
            newFilterState["all"] = false
        } else if (name !== 'all' && newChecked === false) {
            newFilterState[name] = newChecked
        } else {
            // this is done to avoid situation
            // when no category OR 'all' option is checked
            // when user unclick the 'all' option
            if (newChecked === true) {
                for (const property in newFilterState) {
                    newFilterState[property] = false
                }
                newFilterState["all"] = true
            }
        }

        // when user uncheck all categories, 
        // 'all' option should be checked
        let everyPropertyIsFalse = true
        for (const property in newFilterState) {
            if (newFilterState[property] === true) {
                everyPropertyIsFalse = false;
            }
        }
        if (everyPropertyIsFalse) newFilterState["all"] = true

        setFilter(newFilterState);
    }, [checked])


    return (
        <Checkbox id={'name'} label={name} size={'l'} checked={filter[name]} setChecked={setChecked} />
    )
}

export default FilterCheckbox