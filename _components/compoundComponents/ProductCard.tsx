"use client"

import { ProductForCard } from '@/types/componentTypes'
import Image from 'next/image'

interface ProductForCardProps {
    product: ProductForCard
}

const ProductCard = ({ product }: ProductForCardProps) => {
    return (
        <div className={`framedComponent product-card-wrapper`}>

            <Image
                src={product.imageUrl}
                // fill
                // objectFit='cover'
                width={268}
                height={204}
                alt={product.name || 'Product image'}
            />
        </div>
    )
}

export default ProductCard