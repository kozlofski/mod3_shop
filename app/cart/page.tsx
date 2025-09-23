"use client"

import Checkbox from '@/_components/basicComponents/Checkbox'
import CartListItem from '@/_components/compoundComponents/CartListItem'
import { CartItem } from '@/prisma/generated/prisma'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const session = useSession()
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        console.log("Fetching cart")
        const fetchCart = async () => {
            const response = await fetch(`${baseUrl}/api/cart`, {
                method: "GET"
            })
            const data = await response.json()
            console.log("data:", data)
            setCart(data.items.cartItems)
        }
        if (session) fetchCart()
    }, [session])

    console.log("Cart page, cart: ", cart)

    return (
        <div className='cart-container'>
            <div className="cart-content">
                {session && cart &&
                    <>
                        <Checkbox id={''} label='Select All' size={'l'} checked={false} setChecked={() => { }} ></Checkbox>
                        <ul className="cart-items">
                            {cart.map((item) => (
                                <li className='cart-items-item' key={item.productId}>
                                    <Checkbox id={''} label='' size={'l'} checked={false} setChecked={() => { }} ></Checkbox>
                                    <CartListItem productId={item.productId} cart={cart} setCart={setCart}></CartListItem>
                                </li>
                            ))}
                        </ul>
                    </>
                }
            </div>
            <div className="cart-summary"></div>
        </div>
    )
}

export default Cart  