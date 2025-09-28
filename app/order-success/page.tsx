"use client"
import Button from '@/_components/basicComponents/Button'
import OrderItemComponent from '@/_components/compoundComponents/OrderItem'
import { SuccessCircle } from '@/_components/icons/icons'
import { Order } from '@/prisma/generated/prisma'
import { OrderItemWithProduct } from '@/types/dataTypes'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const OrderSuccess = () => {
    type ExtendedOrder = Order & { orderItems: Array<OrderItemWithProduct> }

    const [order, setOrder] = useState<ExtendedOrder>()
    const [orderDate, setOrderDate] = useState<string>()
    const router = useRouter()

    useEffect(() => {
        const fetchNewestOrder = async () => {
            const response = await fetch('/api/order')
            const { newestOrder } = await response.json()
            console.log("Newest order: ", newestOrder)
            setOrder(newestOrder)
            const orderDate = newestOrder.createdAt
            setOrderDate(
                new Date(orderDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })
            )
        }
        fetchNewestOrder()
    }, [])



    return (
        <div className='order-success-container framedComponent'>
            <SuccessCircle></SuccessCircle>
            <h2>Thanks for Your Order!</h2>
            <h3>INV/208421205/TSR/3385-B54</h3>
            <div className="order-success-transaction-details">
                <h4>Transaction Date</h4>
                <p>{orderDate}</p>
            </div>
            <div className="order-success-transaction-details">
                <h4>Transaction Date</h4>
                <p>{orderDate}</p>
            </div>
            <div className="order-success-transaction-details">
                <h4>Payment Method</h4>
                <p>Apple Pay</p>
            </div>
            <div className="order-success-transaction-details">
                <h4>Your Order</h4>
                <ul className='order-success-order-items'>
                    {order?.orderItems.map((item) => <li key={item.productId}>
                        <OrderItemComponent item={item}></OrderItemComponent>
                    </li>)}
                </ul>
            </div>
            <div className="order-success-price-details">
                <h4>Grand total</h4>
                <p>${order?.totalAmount.toString()}</p>
            </div>
            <Button
                size='xl'
                variant='full'
                onClick={() => router.push("/product")}
                className='w-full'>Continue shopping</Button>
        </div>
    )
}

export default OrderSuccess