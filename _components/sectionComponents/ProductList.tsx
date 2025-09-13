import React from 'react'
import { prisma } from '@/prisma/clientSingleton'
import ProductCard from '@/_components/compoundComponents/ProductCard'
import { ProductForCard } from '@/types/componentTypes'
import Pagination from '../compoundComponents/Pagination'


interface ProductListProps {
    searchParams?: Promise<{ [key: string]: string | undefined }>
}

const ProductList = async ({ searchParams }: ProductListProps) => {
    const searchParamsObject = (await searchParams) || {}
    const categoriesFromParams = searchParamsObject.category || undefined
    const categoriesArrayFromParams = categoriesFromParams?.split(",") || []
    const page = parseInt(searchParamsObject.page || "1")
    const show = parseInt(searchParamsObject.show || "10")
    const skip = (page - 1) * show;

    const productListLength = await prisma.product.count({
        where: categoriesArrayFromParams.length > 0 ? {
            categories: {
                some: {
                    name: { in: categoriesArrayFromParams }
                }
            }
        } : undefined
    })

    const productList = await prisma.product.findMany({
        skip: skip,
        take: show,
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

    const totalPages = Math.ceil(productListLength / show)

    return (
        <>
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
            <Pagination totalPages={totalPages} ></Pagination>

        </>
    )
}

export default ProductList
