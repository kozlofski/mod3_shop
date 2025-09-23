"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { CartItem, Category, Product } from '@/prisma/generated/prisma';
import Badge from '../basicComponents/Badge';
import { TrashBin } from '../icons/icons';

interface CartListItemProps {
    productId: number;
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

interface ProductWithCategories extends Product {
    categories: Category[];
}

const CartListItem = ({ productId, cart, setCart }: CartListItemProps) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    const [product, setProduct] = useState<ProductWithCategories>()

    useEffect(() => {
        // is this necessary? Maybe get product info in cart query
        const fetchProduct = async () => {
            const response = await fetch(`${baseUrl}/api/product/${productId}`)
            const product = await response.json()
            setProduct(product)
            console.log(product)
        }
        fetchProduct()
    }, [])

    const handleDelete = async () => {
        const response = await fetch(`${baseUrl}/api/cart/${productId}`, {
            method: 'DELETE'
        })
        if (response) {
            const updatedCart = cart.filter((cartItem) => cartItem.productId !== productId)
            setCart(updatedCart)
        }
    }

    return (<>
        {product && <div className='cart-item-container framedComponent'>
            <div className="picture-wrapper-frame framedComponent">
                <div className={`picture-wrapper-cart`}>
                    <div className={`picture-sizer-cart`}>
                        <Image
                            src={product.imageUrls[0]}
                            fill
                            objectFit='contain'
                            alt={product.name || 'Product image'}
                        />
                    </div>
                </div>
            </div>

            <div className='cart-item-right'>
                <div className='cart-item-headerAndDelete'>
                    <h3 className="product-card-header">{product.name}</h3>
                    <div className='delete-cartItem-icon-wrapper'>
                        <button onClick={handleDelete}><TrashBin /></button>
                    </div>
                </div>
                <ul className="cart-category-list">
                    {product.categories.map((category, index) => (
                        <li key={index}>
                            <Badge size={'l'} color={'default'} type={'fill'} className={'capitalize'} >{category.name}</Badge></li>
                    ))}
                </ul>
                <p className="product-card-price">$ {product.price?.toString()}</p>

            </div>
        </div>}
    </>)
}

export default CartListItem