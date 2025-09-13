import React from 'react'
import { prisma } from '@/prisma/clientSingleton'
import ProductCard from '@/_components/compoundComponents/ProductCard'
import { ProductForCard } from '@/types/componentTypes'


interface ProductListProps {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

const ProductList = async ({ searchParams }: ProductListProps) => {
    const searchParamsObject = (await searchParams) || {}
    const categoriesArrayFromParams = Object.keys(searchParamsObject)

    console.log(categoriesArrayFromParams)

    // const catFromParams = []
    const productList = await prisma.product.findMany({
        include: {
            categories: {
                select: {
                    name: true
                }
            },
        },
        where: categoriesArrayFromParams.length > 0 ? {
            categories: {
                some: {
                    name: { in: categoriesArrayFromParams }
                }
            }
        } : undefined
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
