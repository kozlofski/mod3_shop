"use client"

import React, { useEffect, useState } from 'react'
import { MinusSign, PlusSign } from '../icons/icons'
import FilterCheckbox from './FilterCheckbox'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

interface CategoryFilterProps {
    initialFilterSettings: Record<string, boolean>,
}

const CategoryFilter = ({ initialFilterSettings }: CategoryFilterProps) => {
    const [filter, setFilter] = useState(initialFilterSettings)
    const [loadAll, setLoadAll] = useState(false)
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { push } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        const paramsArray: string[] = []

        for (const category in filter) {
            if (category !== 'all' && filter[category] === true) paramsArray.push(category)
        }
        if (paramsArray.length > 0) {
            const paramsString = paramsArray.join(",")
            params.set("category", paramsString)
        } else {
            params.delete("category")
        }
        push(`${pathname}?${params.toString()}`)


    }, [filter, searchParams])

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