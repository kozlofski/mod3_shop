"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { OrderItemWithProduct } from '@/types/dataTypes';

interface CartListItemProps {
    item: OrderItemWithProduct;
    className?: string;
}

// interface ProductWithCategories extends Product {
//     categories: Category[];
// }

const CartListItem = ({ item, className }: CartListItemProps) => {
    console.log("ITEM::", item)

    return (<>
        {item && <div className={`cart-item-container ${className} framedComponent`}>
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
                    <h3 className="order-item-header">{item.product.name}</h3>
                </div>

                <div className='order-item-price-quantity'>
                    <span className="order-item-price">$ {item.product.price?.toString()}</span>
                    <span className="order-item-quantity">x{item.quantity}</span>
                </div>

            </div>
        </div>}
    </>)
}

export default CartListItem