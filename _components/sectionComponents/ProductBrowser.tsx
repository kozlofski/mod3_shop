"use server"

import React from 'react'
import CategoryFilter from '../compoundComponents/CategoryFilter'
import { prisma } from '@/prisma/clientSingleton'

const ProductBrowser = async () => {
    const categories = await prisma.category.findMany({ select: { name: true } })

    const categoriesArray = ['all', ...Array.from(categories).map(category => category['name'])]
    const categoriesFilterInitialObject: Record<string, boolean> = {}
    categoriesArray.map(category => {
        categoriesFilterInitialObject[category] = (category === 'all')
    })

    return (
        <div className="product-browser-container">
            <div className="product-browser-filters">
                <CategoryFilter initialFilterSettings={categoriesFilterInitialObject} />
            </div>
        </div>
    )
}

export default ProductBrowser