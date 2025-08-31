"use client"

import React, { useState } from 'react'
import { FilterArrow } from '../icons/icons'

interface FilterAccordionProps {
    children: React.ReactNode,
    className?: string,
    header: string,
    // onClick?: () => void
}

const FilterAccordion = ({ children, className, header }: FilterAccordionProps) => {
    const [isVisible, setIsVisible] = useState(true)

    const setVisibility = () => {
        setIsVisible(prev => !prev)
    }

    return (
        <div className={`accordion ${className}`}>
            <div className={`accBar filterAccBar`} onClick={setVisibility}>
                <h2 className="accHeader filterAccHeader" >{header}</h2>
                <div className={`${isVisible ? "rotate-540 duration-300" : "duration-300"}`}>
                    <FilterArrow />
                </div>
            </div>
            {isVisible && children}
        </div >
    )
}

export default FilterAccordion