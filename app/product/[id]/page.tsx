"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Category, Product } from '@/prisma/generated/prisma'
import Badge from '@/_components/basicComponents/Badge'

const ProductDetails = () => {
    const { id: productId } = useParams()
    const [product, setProduct] = useState<Product & { categories: Category[] }>()
    const [selectedImage, setSelectedImage] = useState(0)

    useEffect(() => {
        const fetchProduct = async () => {
            const result = await fetch(`/api/product/${productId}`)
            const fetchedProduct = await result.json()
            console.log("Product details: ", fetchedProduct.product)
            setProduct(fetchedProduct.product)
        }
        fetchProduct();
    }, [productId])

    return (
        product ? (
            <div className='product-details-container'>
                <div className='product-details-product'>
                    <div className='product-details-images'>
                        <div className='framedComponent'>
                            <div className='product-details-big-image picture-wrapper'>
                                <div className='picture-sizer'>
                                    <Image src={product.imageUrls[selectedImage]} alt={''} fill objectFit='contain'></Image>
                                </div>
                            </div>
                        </div>
                        <div className="product-details-three-images">
                            <div onClick={() => setSelectedImage(0)} className='product-details-small-image picture-wrapper'>
                                <div className='picture-sizer'>
                                    <Image src={product.imageUrls[0]} alt={''} fill objectFit='contain'></Image>
                                </div>
                            </div>
                            <div onClick={() => setSelectedImage(1)} className='product-details-small-image picture-wrapper'>
                                <div className='picture-sizer'>
                                    <Image src={product.imageUrls[1]} alt={''} fill objectFit='contain'></Image>
                                </div>
                            </div>
                            <div onClick={() => setSelectedImage(2)} className='product-details-small-image picture-wrapper'>
                                <div className='picture-sizer'>
                                    <Image src={product.imageUrls[2]} alt={''} fill objectFit='contain'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-details-details'>
                    <h2 className='product-details-h3'>
                        {product.name}
                    </h2>
                    <ul className="product-details-category-list">
                        {product.categories.map(cat => <li key={cat.id}>
                            <Badge size={'l'} color={'default'} type={'fill'} >{cat.name}</Badge>
                        </li>)}
                    </ul>
                </div>
            </div>
        ) : null
    )
}

export default ProductDetails