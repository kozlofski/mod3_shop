import React from 'react'
import Image from 'next/image'

import tempImg from "@/app/assets/mouse.png" // #TODO remove
import Button from '../basicComponents/Button';
import CartMiniButton from '../cartMiniButton/CartMiniButton';

interface ProductProps {
    product: {
        productName: string,
        category: string, // this should be separate type
        price: number,
        oldPrice?: number
    }
}

const ProductTile = ({ product }: ProductProps) => {
    return (
        <div className="relative border border-border bg-secondaryBg w-[300px] h-[386px] flex flex-col p-[16px]">
            <CartMiniButton />
            <Image src={tempImg} alt="productImg" width={268} height={204} >
            </Image>
            <Button type="primary" className="mt-[18px] mb-[16px] w-fit h-[36px] ">{product.category}</Button>
            <h2 className="text-[18px] text-header mb-[8px]">{product.productName}</h2>
            <div className='flex flex-row gap-[10px] justify-start items-center'>
                <span className="text-[28px] font-semibold text-header">${product.price}</span>
                {product.oldPrice && <span className="text-[18px] font-normal text-header line-through">${product.oldPrice}</span>}
            </div>
        </div >
    )
}

export default ProductTile