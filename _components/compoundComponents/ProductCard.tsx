"use client"

import { ProductForCard } from '@/types/componentTypes'
import Image from 'next/image'
import Badge from '../basicComponents/Badge'
import CartMiniButton from '../basicComponents/CartMiniButton'
import { CartIcon } from '../icons/icons'

interface ProductForCardProps {
    product: ProductForCard
}

const ProductCard = ({ product }: ProductForCardProps) => {
    return (
        <div className={`framedComponent product-card-wrapper`}>
            <div className={`picture-wrapper`}>
                <div className={`picture-sizer`}>
                    <Image
                        src={product.imageUrl}
                        fill
                        objectFit='contain'
                        alt={product.name || 'Product image'}
                    />
                </div>
            </div>
            <ul className="product-card-category-list">
                {product.categories.map((category, index) => (
                    <li key={index}>
                        <Badge size={'l'} color={'default'} type={'fill'} className={'capitalize'} >{category.name}</Badge></li>
                ))}
            </ul>
            <h3 className="product-card-header">{product.name}</h3>
            <p className="product-card-price">$ {product.price}</p>
            <button className="mini-cart-btn">
                <div className='mini-cart-btn-icon-wrapper'>
                    <CartIcon />
                </div>
            </button>
        </div>
    )
}

export default ProductCard