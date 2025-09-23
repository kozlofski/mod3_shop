"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { CartItem, Category, Product } from '@/prisma/generated/prisma';
import Badge from '../basicComponents/Badge';
import { MinusSign, PlusSign, TrashBin } from '../icons/icons';
import Input from '../basicComponents/Input';
import { CartWithProductInfo, CartItemWithProduct } from '@/types/dataTypes';

interface CartListItemProps {
    item: CartItemWithProduct;
    cart: CartWithProductInfo;
    setCart: React.Dispatch<React.SetStateAction<CartWithProductInfo | undefined>>;
}

interface ProductWithCategories extends Product {
    categories: Category[];
}

const CartListItem = ({ item, cart, setCart }: CartListItemProps) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    const [itemAmount, setItemAmount] = useState(item.quantity)

    const handleDelete = async () => {
        const response = await fetch(`${baseUrl}/api/cart/${item.productId}`, {
            method: 'DELETE'
        })
        if (response) {
            const updatedCartItems = cart?.cartItems.filter((cartItem) => cartItem.productId !== item.productId) || [];
            const updatedCart = { ...cart, cartItems: updatedCartItems }
            setCart(updatedCart)
        }
    }

    const modifyQuantity = async (amount: number) => {
        const response = await fetch(`${baseUrl}/api/cart/${item.productId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                amount: amount
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 201) {
            const updatedCartItems = cart?.cartItems.map((cartItem) => {
                if (cartItem.productId === item.productId) return cartItem
                else {
                    return { ...cartItem, quantity: cartItem.quantity + amount }
                }
            })
            const updatedCart = { ...cart, cartItems: updatedCartItems }
            const { newAmount } = await response.json()
            setItemAmount(newAmount)
            setCart(updatedCart)
        } else if (response.status === 200) {
            const updatedCartItems = cart?.cartItems.filter((cartItem) => cartItem.productId !== item.productId) || [];
            const updatedCart = { ...cart, cartItems: updatedCartItems }
            setCart(updatedCart)
        }
        console.log("Increment")
    }

    return (<>
        {item && <div className='cart-item-container framedComponent'>
            <div className="picture-wrapper-frame framedComponent">
                <div className={`picture-wrapper-cart`}>
                    <div className={`picture-sizer-cart`}>
                        <Image
                            src={item.product.imageUrls[0]}
                            fill
                            objectFit='contain'
                            alt={item.product.name || 'Product image'}
                        />
                    </div>
                </div>
            </div>

            <div className='cart-item-right'>
                <div className='cart-item-headerAndDelete'>
                    <h3 className="product-card-header">{item.product.name}</h3>
                    <div className='delete-cartItem-icon-wrapper'>
                        <button onClick={handleDelete}><TrashBin /></button>
                    </div>
                </div>
                {/* <ul className="cart-category-list">
                    {product.categories.map((category, index) => (
                        <li key={index}>
                            <Badge size={'l'} color={'default'} type={'fill'} className={'capitalize'} >{category.name}</Badge></li>
                    ))}
                </ul> */}

                <div className='cart-item-price-input-wrapper'>
                    <p className="cart-item-price">$ {item.product.price?.toString()}</p>
                    <Input id={''}
                        data={{ placeholder: '', error: '', label: '', helper: '' }}
                        size='m'
                        type={''}
                        leftIcon={<button onClick={modifyQuantity.bind(null, -1)}><MinusSign /></button>}
                        value={itemAmount.toString()}
                        rightIcon={<button onClick={modifyQuantity.bind(null, 1)}><PlusSign /></button>}
                        className='w-fit'>
                    </Input>
                </div>
            </div>
        </div>}
    </>)
}

export default CartListItem