"use client"

import React, { useState } from 'react'
import Checkbox from './FilterCheckbox'
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
            <ul className="filterOptionsList">
                {Object.entries(categoryFilterInitialSettings).map((category, idx) => {
                    if (!loadAll && idx > 4) return
                    const categoryName = category[0]
                    return <li className="filterOptionItem" key={idx}>
                        <Checkbox
                            name={categoryName}
                            filterSettings={filter}
                            onClickProps={setFilter}
                        />
                        {categoryName}
                    </li>
                })}
            </ul>
            <div className="filterLoadMoreFooter" onClick={handleLoadMore}>
                <p className="text-base font-medium">Load {loadAll ? "less" : "more"}</p>
                {loadAll ? <MinusSign /> : <PlusSign />}
            </div>
        </div>
    )
}

export default CategoryFilter