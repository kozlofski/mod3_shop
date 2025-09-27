"use client"

import Button from '@/_components/basicComponents/Button'
import Checkbox from '@/_components/basicComponents/Checkbox'
import CartListItem from '@/_components/compoundComponents/CartListItem'
// import { Cart, CartItem } from '@/prisma/generated/prisma'
import { CartWithProductInfo } from '@/types/dataTypes'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

interface CartSummary {
    totalAmount: number,
    totalItems: number
}

const Cart = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const session = useSession()
    const [cart, setCart] = useState<CartWithProductInfo>()
    const [cartSummary, setCartSummary] = useState<CartSummary>()

    useEffect(() => {
        console.log("Fetching cart")
        const fetchCart = async () => {
            const response = await fetch(`${baseUrl}/api/cart`, {
                method: "GET"
            })
            const data = await response.json()
            setCart(data.cart)
        }
        if (session) fetchCart()
    }, [session])

    useEffect(() => {
        console.log("Fetching cart summary")
        const fetchCartSummary = async () => {
            const response = await fetch(`${baseUrl}/api/cart/summary`)
            const data = await response.json()
            console.log(data)
            setCartSummary(data)
        }
        if (session) fetchCartSummary()
    }, [cart])


    return (
        <div className='cart-container'>
            <div className="cart-content">
                {session && cart &&
                    <>
                        <Checkbox id={''} label='Select All' size={'l'} checked={false} setChecked={() => { }} ></Checkbox>
                        <ul className="cart-items">
                            {cart.cartItems.map((item) => (
                                <li className='cart-items-item' key={item.productId}>
                                    <Checkbox id={''} label='' size={'l'} checked={false} setChecked={() => { }} ></Checkbox>
                                    <CartListItem item={item} cart={cart} setCart={setCart} className='framedComponent'></CartListItem>
                                </li>
                            ))}
                        </ul>
                    </>
                }
            </div>
            <div className="cart-summary framedComponent">
                <div className="cart-summary-total-product">
                    <h3 className='cart-summary-header'>Total Product</h3>
                    <div className="cart-product-price-wrapper">
                        <span className='cart-price-header'>Total Product Price ({cartSummary?.totalItems} item{cartSummary?.totalItems !== 1 && 's'})</span>
                        <span className='cart-total-product-price'>${cartSummary?.totalAmount}</span>
                    </div>
                </div>
                <div className="cart-subtotal-wrapper">
                    <span className="cart-subtotal-header">Subtotal</span>
                    <span className="cart-subtotal-price">${cartSummary?.totalAmount}</span>
                </div>
                <Button size='xl' variant='full' className='w-full'>Checkout</Button>
            </div>
        </div>
    )
}

export default Cart  