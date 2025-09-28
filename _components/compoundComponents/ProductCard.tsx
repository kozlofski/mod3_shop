"use client"

import { ProductForCard } from '@/types/componentTypes'
import Image from 'next/image'
import Badge from '../basicComponents/Badge'
import { CartIcon } from '../icons/icons'
import Link from 'next/link'

interface ProductForCardProps {
    product: ProductForCard
}

const ProductCard = ({ product }: ProductForCardProps) => {
    const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault()
        e.stopPropagation()
        const response = await fetch('/api/cart', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ itemId: id.toString(), quantity: 1 })
        })
        console.log("Add to cart item:", id)
    }

    return (
        <Link href={`/product/${product.id}`}>
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
                <button className="mini-cart-btn" onClick={e => handleAddToCart(e, product.id)}>
                    <div className='mini-cart-btn-icon-wrapper'>
                        <CartIcon />
                    </div>
                </button>
            </div>
        </Link>
    )
}

export default ProductCard