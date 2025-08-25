"use client"

import React, { useState } from 'react'
import Checkbox from '../checkbox/Checkbox'


const categoryFilterInitialSettings: Record<string, boolean> = {
    all: true,
    mouse: false,
    headphone: false,
    keyboard: false,
    monitor: false,
    webcam: false
}

const CategoryFilter = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [filter, setFilter] = useState(categoryFilterInitialSettings)

    return (
        <div className="text-header">
            <h2 className=" text-[20px] font-semibold">Category</h2>
            <ul className="flex flex-col gap-[20px]">
                {Object.entries(categoryFilterInitialSettings).map((category, idx) => {
                    const categoryName = category[0]
                    return <li className="flex flex-row gap-[16px]" key={idx}>
                        <Checkbox
                            name={categoryName}
                            filterSettings={filter}
                            onClickProps={setFilter}
                        />
                        {categoryName}
                    </li>
                })}
            </ul>
        </div >
    )
}

export default CategoryFilter