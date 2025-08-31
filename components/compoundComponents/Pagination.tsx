"use client"

import React, { useEffect, useState } from 'react'

interface PaginationProps {
    // current page will be setCurrentPage
    currentPage: number,
    totalPages: number,
}

const buttonsLimit = 10

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
    const [page, setPage] = useState(currentPage)
    const [numbers, setNumbers] = useState<number[]>([])

    useEffect(() => {
        const numbersVar = [];
        if (totalPages >= 2 && totalPages <= buttonsLimit) {
            for (let i = 1; i <= totalPages; i++)
                numbersVar.push(i)
            setNumbers(numbersVar)
        }
        else if (totalPages > buttonsLimit) {
            numbersVar.push(1)
            if (currentPage > 3) {
                numbersVar.push(-1)
            }

            if (currentPage > 2)
                numbersVar.push(currentPage - 1)
            if (currentPage > 1 && currentPage < totalPages)
                numbersVar.push(currentPage)
            if (currentPage < totalPages - 1)
                numbersVar.push(currentPage + 1)

            if (currentPage < totalPages - 2)
                numbersVar.push(-2)

            numbersVar.push(totalPages);
            setNumbers(numbersVar)
        }
    }, [page, currentPage, totalPages])

    return (
        <>
            {totalPages >= 2 &&
                <ul className="flex flex-row text-header gap-[16px]">
                    <button
                        key="-3"
                        onClick={() => page > 1 && setPage(prev => prev - 1)}
                        className="arrowButton">{"<--"}</button>
                    {numbers.map((number) =>
                    (<li key={number}>
                        {number > 0 ?
                            <button
                                key={number}
                                onClick={() => setPage(number)}
                                className={number === page ? "current" : ""}
                            >{number}</button> :
                            <button key={number} className="blank">...</button>}
                    </li>)
                    )
                    }
                    <button
                        key="-4"
                        onClick={() => page < totalPages && setPage(prev => prev + 1)}
                        className="arrowButton">{"-->"}</button>

                </ ul>}
        </>
    )
}

export default Pagination