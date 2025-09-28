"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Category, Product } from '@/prisma/generated/prisma'
import Badge from '@/_components/basicComponents/Badge'
import Button from '@/_components/basicComponents/Button'
import { generateShippingDate } from '@/lib/services'
import { CartIcon, MinusSign, PlusSign, Shield } from '@/_components/icons/icons'
import Input from '@/_components/basicComponents/Input'
import { changeProductAmountInStock } from '@/lib/prismaQueries'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const ProductDetails = () => {
    const { id: productId } = useParams()
    const session = useSession()
    const [product, setProduct] = useState<Product & { categories: Category[] }>()
    const [selectedImage, setSelectedImage] = useState(0)
    const [viewMore, setViewMore] = useState(false)
    const maxDescriptionLength = 150;
    const [shippingDate] = useState(generateShippingDate())
    const [quantity, setQuantity] = useState(1)
    const router = useRouter()

    useEffect(() => {
        if (session.status === "unauthenticated") {
            router.push("/login")
        }
    }, [session.status, router])

    useEffect(() => {
        const fetchProduct = async () => {
            const result = await fetch(`/api/product/${productId}`)
            const fetchedProduct = await result.json()
            console.log("Product details: ", fetchedProduct.product)
            setProduct(fetchedProduct.product)
        }
        fetchProduct();
    }, [productId])

    const modifyQuantity = async (amount: number) => {
        const modifiedQuantity = quantity + amount;
        if (!product || modifiedQuantity < 1 || modifiedQuantity > product.stock) return
        setQuantity(modifiedQuantity)
    }

    const handleAddToCart = async () => {
        if (!productId) return
        const response = await fetch('/api/cart', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ itemId: productId.toString(), quantity: quantity })
        })
    }
    return (
        product ? (
            <div className='product-details-container'>
                <div className='product-details-product'>
                    <div className='product-details-images'>
                        <div className='framedComponent'>
                            <div className='product-details-big-image picture-wrapper'>
                                <div className='picture-sizer'>
                                    <Image src={product.imageUrls[selectedImage]} alt={''} fill objectFit='contain'></Image>
                                </div>
                            </div>
                        </div>
                        <div className="product-details-three-images">
                            <div onClick={() => setSelectedImage(0)} className='product-details-small-image picture-wrapper'>
                                <div className='picture-sizer'>
                                    <Image src={product.imageUrls[0]} alt={''} fill objectFit='contain'></Image>
                                </div>
                            </div>
                            <div onClick={() => setSelectedImage(1)} className='product-details-small-image picture-wrapper'>
                                <div className='picture-sizer'>
                                    <Image src={product.imageUrls[1]} alt={''} fill objectFit='contain'></Image>
                                </div>
                            </div>
                            <div onClick={() => setSelectedImage(2)} className='product-details-small-image picture-wrapper'>
                                <div className='picture-sizer'>
                                    <Image src={product.imageUrls[2]} alt={''} fill objectFit='contain'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-details-details'>
                    <h2 className='product-details-h3'>
                        {product.name}
                    </h2>
                    <ul className="product-details-category-list">
                        {product.categories.map(cat => <li key={cat.id}>
                            <Badge size={'l'} color={'default'} type={'fill'} >{cat.name}</Badge>
                        </li>)}
                    </ul>
                    <h3 className='product-details-price'>${product.price.toString()}</h3>
                    <div className="product-details-description">
                        {product.description?.length && product.description.length < maxDescriptionLength ?
                            <p>
                                {product.description}
                            </p> :
                            <>
                                <p>
                                    {viewMore ? product.description : product.description?.slice(0, maxDescriptionLength)}
                                </p>
                                <Button size='m' variant='naked' onClick={() => setViewMore(prev => !prev)} >{viewMore ? "View less" : "View more"}</Button>
                            </>
                        }
                    </div>
                    <p className='shipping-available'>Shipping Available</p>
                    <div className='product-details-shipping'>
                        <p className='shield-icon-wrapper'>
                            <Shield />
                        </p>
                        <p className='product-details-shipping-right'>
                            <p className='shipping-vendor'>NexusHub Courier</p>
                            <p className='estimated-arrival'>Estimated arrival {shippingDate}</p>
                        </p>
                    </div>
                </div>
                <div className='product-details-cart framedComponent'>
                    <div className='product-details-color-picker'>
                        <h4>Colors</h4>
                        <div className='picker-colors'>
                            <div className='color-to-pick bg-white'></div>
                            <div className='color-to-pick bg-black'></div>
                        </div>
                    </div>
                    <div className='product-details-quantity-picker'>
                        <h4>Quantity</h4>
                        <Input id={''}
                            data={{ placeholder: '', error: '', label: '', helper: '' }}
                            size='m'
                            type={''}
                            leftIcon={<button onClick={modifyQuantity.bind(null, -1)}><MinusSign /></button>}
                            value={quantity.toString()}
                            rightIcon={<button onClick={modifyQuantity.bind(null, 1)}><PlusSign /></button>}
                            className='w-fit'>
                        </Input>
                        <span>
                            Stock: {product.stock}
                        </span>
                    </div>
                    <div className='product-details-subtotal'>
                        <h4>Subtotal</h4>
                        <h2 className='product-details-subtotal-price'>${quantity * Number(product.price)}</h2>
                    </div>
                    <Button size='xl' variant='stroke' onClick={handleAddToCart}>
                        Add to Cart
                        <div className='product-details-cart-icon-wrapper'>
                            <CartIcon></CartIcon>
                        </div>
                    </Button>
                </div>
            </div>
        ) : null
    )
}

export default ProductDetails