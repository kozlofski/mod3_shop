"use server"

import React from 'react'
import { prisma } from '@/prisma/clientSingleton'
import ProductCard from '@/_components/compoundComponents/ProductCard'
import { ProductForCard } from '@/types/componentTypes'

const ProductList = async () => {
    const productList = await prisma.product.findMany({
        include: {
            categories: {
                select: {
                    name: true
                }
            },
        }
    })

    return (
        <ul className='products-list'>
            {productList.map((product) => {
                const productForCard: ProductForCard = {
                    name: product.name,
                    id: product.id,
                    price: product.price.toString(),
                    categories: product.categories,
                    imageUrl: product.imageUrls[0]
                }
                return (<li key={product.id} className='product-item'>
                    <ProductCard product={productForCard}></ProductCard>
                </li>)
            })}
        </ul>
    )
}

export default ProductList
