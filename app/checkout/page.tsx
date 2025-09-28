"use client"

import Checkbox from '@/_components/basicComponents/Checkbox'
import CartListItem from '@/_components/compoundComponents/CartListItem'
import SectionWithHeader from '@/_components/sectionComponents/SectionWithHeader'
import { CartWithProductInfo, NewAddressData } from '@/types/dataTypes'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import Input from '@/_components/basicComponents/Input'
import Button from '@/_components/basicComponents/Button'
import { Address } from '@/prisma/generated/prisma'
import Badge from '@/_components/basicComponents/Badge'
import { useRouter } from 'next/navigation'

const newAddressFormSchema = z.object({
    country: z.string().trim().min(1, { message: "Select a country" }),
    province: z.string().trim().min(1, { message: "Province cannot be empty" }),
    city: z.string().trim().min(1, { message: "City cannot be empty" }),
    postalCode: z.string().trim().min(1, { message: "Postal code cannot be empty" }),
    completeAddress: z.string().trim().min(1, { message: "Please write complete address" }),
})

interface CartSummary {
    totalAmount: number,
    totalItems: number
}

const Checkout = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const session = useSession()

    const router = useRouter()
    useEffect(() => {
        if (session.status === "unauthenticated") {
            router.replace("/login")
        }
    }, [session.status, router])

    const [cart, setCart] = useState<CartWithProductInfo>()
    const [productProtection, setProductProtection] = useState(false)
    const [newAddressForm, setNewAddressForm] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(newAddressFormSchema) })
    const [isMain, setIsMain] = useState(false)
    const [cartSummary, setCartSummary] = useState<CartSummary>()
    const [mainAddress, setMainAddress] = useState<Address | undefined>(undefined)

    const [grandTotal, setGrandTotal] = useState(0)

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
    }, [session, baseUrl])

    useEffect(() => {
        console.log("Fetching cart summary")
        const fetchCartSummary = async () => {
            const response = await fetch(`${baseUrl}/api/cart/summary`)
            const data = await response.json()
            console.log("Fetched cart:", data.cart)
            setCartSummary(data)
        }
        if (session) fetchCartSummary()
    }, [cart, session, baseUrl])

    useEffect(() => {
        console.log("Fetching main address")
        const fetchCartSummary = async () => {
            const response = await fetch(`${baseUrl}/api/address/`)
            const data = await response.json()
            console.log("Fetched address:", data.address)
            setMainAddress(data.address)
        }
        if (session) fetchCartSummary()
    }, [baseUrl, session])

    useEffect(() => {
        if (!cartSummary) return

        const protection = productProtection ? 1 : 0;
        const totalPrice = cartSummary.totalAmount + protection + 11.5;
        setGrandTotal(totalPrice)
    }, [cartSummary, productProtection])

    const onSubmitWithNewAddress = async (data: NewAddressData) => {
        console.log("paying + new address ", data)
        const response = await fetch("/api/checkout", {
            method: 'POST',
            body: JSON.stringify({
                country: data.country,
                province: data.province,
                city: data.city,
                postalCode: data.postalCode,
                completeAddress: data.completeAddress,
                isMain: isMain,
                grandTotal: grandTotal,
                items: cart?.cartItems
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 201) {
            console.log("SHOULD REDIRECT")
            router.push('/order-success')
        }
    }

    const submitWithExistingAddress = async () => {
        console.log("paying with old address ")
        if (!mainAddress) return
        const response = await fetch("/api/checkout", {
            method: 'POST',
            body: JSON.stringify({
                addressId: mainAddress.id,
                grandTotal: grandTotal,
                items: cart?.cartItems
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 201) {
            console.log("SHOULD REDIRECT")
            router.push('/order-success')
        }
    }

    return (
        <>
            {(session.status === 'authenticated') &&
                <div className='checkout-container'>
                    <div className='checkout-left'>
                        <SectionWithHeader header='Your Order'>
                            <div className="cart-content checkout-cart-content framedComponent">
                                {session && cart &&
                                    <ul className="cart-items">
                                        {cart?.cartItems.map((item) => (
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
                            <div className='address-section framedComponent'>
                                <div className='address-picker'>
                                    <div
                                        className={`address-type ${newAddressForm || "address-type-active"}`}
                                        onClick={() => setNewAddressForm(false)}>Existing Address</div>
                                    <div
                                        className={`address-type ${newAddressForm && "address-type-active"}`}
                                        onClick={() => setNewAddressForm(true)}>New Address</div>
                                </div>
                                {newAddressForm ?

                                    <form className='new-address-form' id='new-address-form' onSubmit={handleSubmit(onSubmitWithNewAddress)}>
                                        <Input
                                            id='country'
                                            type='text'
                                            size='xl'
                                            {...register('country')}
                                            data={{
                                                placeholder: "Country",
                                                label: '',
                                                error: errors.country?.message ?? "",
                                                helper: " "
                                            }}
                                        />
                                        <Input
                                            id='province'
                                            type='text'
                                            size='xl'
                                            {...register('province')}
                                            data={{
                                                placeholder: "Province",
                                                label: '',
                                                error: errors.province?.message ?? "",
                                                helper: " "
                                            }}
                                        />
                                        <Input
                                            id='city'
                                            type='text'
                                            size='xl'
                                            {...register('city')}
                                            data={{
                                                placeholder: "City",
                                                label: '',
                                                error: errors.city?.message ?? "",
                                                helper: " "
                                            }}
                                        />
                                        <Input
                                            id='postalCode'
                                            type='text'
                                            size='xl'
                                            {...register('postalCode')}
                                            data={{
                                                placeholder: "Postal Code",
                                                label: '',
                                                error: errors.postalCode?.message ?? "",
                                                helper: " "
                                            }}
                                        />
                                        <Input
                                            id='completeAddress'
                                            type='text'
                                            size='xl'
                                            {...register('completeAddress')}
                                            data={{
                                                placeholder: "Input complete address",
                                                label: '',
                                                error: errors.postalCode?.message ?? "",
                                                helper: " "
                                            }}
                                        />
                                        <Checkbox checked={isMain} setChecked={setIsMain} id={'isMain'} label={'Make it the main address'} size={'l'}></Checkbox>

                                    </form> :
                                    <>{mainAddress ?
                                        (<div className='existing-address'>
                                            <div className='existing-address-header'>
                                                Address
                                                {mainAddress.isMain && <Badge size={'l'} color={'default'} type={'fill'}>Main Address</Badge>}
                                            </div>
                                            <div className="existing-address-complete-address">{mainAddress.completeAddress}</div>
                                            <div className="existing-address-fields">
                                                <div className='existing-address-field'>
                                                    <h4>Country</h4>
                                                    <p>{mainAddress.country}</p>
                                                </div>
                                                <div className='existing-address-field'>
                                                    <h4>Province</h4>
                                                    <p>{mainAddress.province}</p>
                                                </div>
                                                <div className='existing-address-field'>
                                                    <h4>City</h4>
                                                    <p>{mainAddress.city}</p>
                                                </div>
                                                <div className='existing-address-field'>
                                                    <h4>Postal Code</h4>
                                                    <p>{mainAddress.postalCode}</p>
                                                </div>
                                            </div>
                                        </div>)
                                        : <p className='no-address'>No address available. Please provide a new address</p>
                                    }</>
                                }
                            </div>
                        </SectionWithHeader>
                    </div>
                    <div className='checkout-right'>
                        <div className="cart-summary framedComponent">
                            <div className="cart-summary-total-product">
                                <h3 className='cart-summary-header'>Total Product</h3>
                                <div className="cart-product-price-wrapper">
                                    <span className='cart-price-header'>Total Product Price ({cartSummary?.totalItems} item{cartSummary?.totalItems !== 1 && 's'})</span>
                                    <span className='cart-total-product-price'>${cartSummary?.totalAmount}</span>
                                </div>
                                <div className="cart-product-price-wrapper">
                                    <span className='cart-price-header'>Total Product Protection</span>
                                    <span className='cart-total-product-price'>${productProtection ? "1" : "0"}</span>
                                </div>
                                <div className="cart-product-price-wrapper">
                                    <span className='cart-price-header'>Total Shipping Price</span>
                                    <span className='cart-total-product-price'>$5</span>
                                </div>
                                <div className="cart-product-price-wrapper">
                                    <span className='cart-price-header'>Shipping Insurance</span>
                                    <span className='cart-total-product-price'>$6</span>
                                </div>
                            </div>
                            <div className="cart-summary-total-product">
                                <h3 className='cart-summary-header'>Transaction Fees</h3>
                                <div className="cart-product-price-wrapper">
                                    <span className='cart-price-header'>Service Fees</span>
                                    <span className='cart-total-product-price'>$0.5</span>
                                </div>

                            </div>
                            <div className="cart-subtotal-wrapper">
                                <span className="cart-subtotal-header">Grand Total</span>
                                <span className="cart-subtotal-price">${grandTotal}</span>
                            </div>
                            {
                                newAddressForm ?
                                    <Button
                                        size='xl'
                                        variant='full'
                                        className='w-full'
                                        type='submit'
                                        form='new-address-form'
                                    >
                                        Pay Now
                                    </Button> :
                                    <Button
                                        size='xl'
                                        variant='full'
                                        className='w-full'
                                        onClick={submitWithExistingAddress}
                                    >
                                        Pay Now
                                    </Button>

                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Checkout