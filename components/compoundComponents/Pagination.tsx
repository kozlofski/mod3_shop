"use client"

import React, { useEffect, useState } from 'react'
import Button from '../basicComponents/Button'
import { LeftArrowIcon, RightArrowIcon } from '../icons/icons'

interface PaginationProps {
    // current page will be setCurrentPage
    currentPage: number,
    totalPages: number,
}

const buttonsLimit = 7

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
    // this use state will come from the props
    const [page, setPage] = useState(currentPage)
    const [numbers, setNumbers] = useState<number[]>([])

    useEffect(() => {
        // #todo refactor rename variables and array
        const numbersArray = [];
        if (totalPages >= 2 && totalPages <= buttonsLimit) {
            for (let i = 1; i <= totalPages; i++)
                numbersArray.push(i)
            setNumbers(numbersArray)
        }
        else if (totalPages > buttonsLimit) {
            numbersArray.push(1)
            if (page > 3) {
                numbersArray.push(-1)
            }

            if (page > 2)
                numbersArray.push(page - 1)
            if (page > 1 && page < totalPages)
                numbersArray.push(page)
            if (page < totalPages - 1)
                numbersArray.push(page + 1)

            if (page < totalPages - 2)
                numbersArray.push(-2)

            numbersArray.push(totalPages);
            setNumbers(numbersArray)
        }
    }, [page, currentPage, totalPages])

    return (
        <div className={`pagination`}>
            {totalPages >= 2 &&
                <ul className="flex flex-row text-header gap-[16px]">
                    {numbers.map((number) =>
                    (<li key={number}>
                        {number > 0 ?
                            <Button
                                className={`btn  ${number === page ? "btn-pag-current" : "btn-pag-inactive"} btn-pag`}
                                onClick={() => setPage(number)}>{number}</Button> :
                            <Button
                                className={`btn btn-pag btn-naked btn-white`}>...</Button>}


                    </li>)
                    )
                    }
                </ ul>}

            <div className={`pagination-buttons`}>
                <Button className="btn btn-m btn-stoke btn-white" onClick={() => page > 1 && setPage(prev => prev - 1)}>
                    <span className="w-[13.33px] stroke-white"><LeftArrowIcon /></span>
                    Previous
                </Button>
                <Button className="btn btn-m btn-stoke btn-white" onClick={() => page < totalPages && setPage(prev => prev + 1)}>
                    Next
                    <span className="w-[13.33px] stroke-white"><RightArrowIcon /></span>
                </Button>
            </div>

        </ div>
    )
}

export default Pagination