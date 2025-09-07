"use client"

import React, { useState } from 'react'
import { MinusSign, PlusSign } from '../icons/icons'
import FilterCheckbox from './FilterCheckbox'

// #todo mock data
// const categoryFilterInitialSettings: Record<string, boolean> = {
//     all: true,
//     mouse: false,
//     headphone: false,
//     keyboard: false,
//     monitor: false,
//     webcam: false
// }

interface CategoryFilterProps {
    initialFilterSettings: Record<string, boolean>,
}

const CategoryFilter = ({ initialFilterSettings }: CategoryFilterProps) => {
    const [filter, setFilter] = useState(initialFilterSettings)
    const [loadAll, setLoadAll] = useState(false)

    const handleLoadMore = () => {
        setLoadAll(prev => !prev)
    }

    return (
        <div className={`category-filter-container`}>
            <ul className="filterOptionsList">
                {Object.entries(filter).map((category, idx) => {
                    if (!loadAll && idx > 4) return
                    const categoryName = category[0]
                    return <li className="filterOptionItem" key={idx}>
                        <FilterCheckbox name={categoryName} filter={filter} setFilter={setFilter} />
                    </li>
                })}
            </ul>
            <div className="filterLoadMoreFooter" onClick={handleLoadMore}>
                <p className="load-more-paragraph">Load {loadAll ? "less" : "more"}</p>
                <span className="load-more-sign">{loadAll ? <MinusSign /> : <PlusSign />}</span>
            </div>
        </div>
    )
}

export default CategoryFilter