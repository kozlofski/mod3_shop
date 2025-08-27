"use client"

import React, { useState } from 'react'
import { FilterArrow } from '../icons/icons'

interface AccordionProps {
    children: React.ReactNode,
    className?: string,
    header: string,
    // onClick?: () => void
}

const Accordion = ({ children, className, header }: AccordionProps) => {
    const [isVisible, setIsVisible] = useState(false)

    const setVisibility = () => {
        setIsVisible(prev => !prev)
    }

    return (
        <div className={`accordion framedComponent`}>
            <div className={`accBar ${className}-bar accBar${isVisible ? "Opened" : "Closed"}`} onClick={setVisibility}>
                <h2 className="accHeader" >{header}</h2>
                <div className={`${isVisible ? "rotate-540 duration-300" : "duration-300"}`}>
                    <FilterArrow />
                </div>
            </div>
            {isVisible &&
                <div className={`acc-text ${className}-text`}>
                    {children}
                </div>
            }
        </div >
    )
}

export default Accordion