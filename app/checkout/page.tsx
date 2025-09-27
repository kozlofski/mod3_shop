"use client"

import Checkbox from '@/_components/basicComponents/Checkbox'
import CartListItem from '@/_components/compoundComponents/CartListItem'
import SectionWithHeader from '@/_components/sectionComponents/SectionWithHeader'
import { CartWithProductInfo } from '@/types/dataTypes'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Checkout = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    const session = useSession()
    const [cart, setCart] = useState<CartWithProductInfo>()
    const [productProtection, setProductProtection] = useState(false)

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

    return (
        <div className='checkout-container'>
            <div className='checkout-left'>
                <SectionWithHeader header='Your Order'>
                    <div className="cart-content checkout-cart-content framedComponent">
                        {session && cart &&
                            <ul className="cart-items">
                                {cart.cartItems.map((item) => (
                                    <li className='cart-items-item' key={item.productId}>
                                        <CartListItem item={item} cart={cart} setCart={setCart}></CartListItem>
                                    </li>
                                ))}
                            </ul>
                        }
                        <div className='checkout-product-protection'>
                            <div className='checkout-product-protection-left'>
                                <Checkbox id={'prod-protection'} label={'Product Protection'} size={'l'} checked={productProtection} setChecked={() => setProductProtection(prev => !prev)} />
                                <p className='claim-process'>The claim process is easy and instant, valid for 6 months</p>
                            </div>
                            <p className='checkout-product-protection-right'>
                                $1
                            </p>
                        </div>
                    </div>

                </SectionWithHeader>
                <SectionWithHeader header='Address'>
                    <div></div>
                </SectionWithHeader>
            </div>
            <div className='checkout-right'></div>
        </div>
    )
}

export default Checkout