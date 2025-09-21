"use client"

import Checkbox from '@/_components/basicComponents/Checkbox'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const session = useSession()
    const [cart, setCart] = useState<Record<string, string | number>>()

    useEffect(() => {
        const fetchCart = async () => {
            const response = await fetch(`${baseUrl}/api/cart`, {
                method: "GET"
            })
            const data = await response.json()
            setCart(data.cartItems)
        }
        if (session) fetchCart()
    }, [])

    console.log("Cart page, cart: ", cart)

    return (
        <div className='cart-container'>
            <div className="cart-content">
                {cart && cart.length > 0 &&
                    <>
                        <Checkbox id={''} label='Select All' size={'l'} checked={false} setChecked={() => { }} ></Checkbox>
                        <ul className="cart-items">
                            {cart.items.map()}
                        </ul>
                    </>
                }
            </div>
            <div className="cart-summary"></div>
        </div>
    )
}

export default Cart  