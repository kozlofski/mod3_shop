"use client"

import React, { useState } from 'react'
import Checkbox from '../checkbox/Checkbox'
import { MinusSign, PlusSign } from '../icons/icons'

// #todo mock data
const categoryFilterInitialSettings: Record<string, boolean> = {
    all: true,
    mouse: false,
    headphone: false,
    keyboard: false,
    monitor: false,
    webcam: false
}

const CategoryFilter = () => {
    const [filter, setFilter] = useState(categoryFilterInitialSettings)
    const [loadAll, setLoadAll] = useState(false)

    const handleLoadMore = () => {
        setLoadAll(prev => !prev)
    }

    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                {Object.entries(categoryFilterInitialSettings).map((category, idx) => {
                    if (!loadAll && idx > 4) return
                    const categoryName = category[0]
                    return <li className="flex flex-row gap-[16px] capitalize" key={idx}>
                        <Checkbox
                            name={categoryName}
                            filterSettings={filter}
                            onClickProps={setFilter}
                        />
                        {categoryName}
                    </li>
                })}
            </ul>
            <div className="flex flex-row justify-between items-center w-[120px] h-[26px] pl-[8px]" onClick={handleLoadMore}>
                <p className="text-base font-medium">Load {loadAll ? "less" : "more"}</p>
                {loadAll ? <MinusSign /> : <PlusSign />}
            </div>
        </div>
    )
}

export default CategoryFilter