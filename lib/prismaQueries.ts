import { prisma } from "@/prisma/clientSingleton";
import { CartItem, OrderItem, OrderStatus, Prisma } from "@/prisma/generated/prisma";
import { SavedItem } from "@/types/dataTypes";

// USER - CREATE (register)
export const createNewUser = async(email: string, hashedPassword: string, mobile: string, country: string) => {
    const result = prisma.user.create({
        data: {
            email: email,
            passwordHash: hashedPassword,
            mobile: mobile,
            country: country,
            cart: { 
                create: {
                    totalAmount: 0
                }
            }
        }
    }) 
    return result
}

// USER - GET
export const getCurrentUserWithCartWithItems = async (userEmail: string) => {
    const result = prisma.user.findUnique({
        where: {
            email: userEmail
        },
        include: {
            cart: {
                include: {
                    cartItems: {
                        include: {
                            product: true
                        }
                    }
                }
            }
        }
    });
    return result
}

// USER - get id
export const getUserByEmail = async (userEmail: string) => {
    const result = prisma.user.findUnique({
        where: {
            email: userEmail
        }
    })
    return result
}

// CART - CREATE or UPDATE cartItem
export const createOrUpdateCartItem = async (cartId: number, productId: number, quantityToCart: number) => {
    const result = prisma.cartItem.upsert({
        where: {
        productId_cartId: {
            productId: productId,
            cartId: cartId
        }
        },
        update: {
            quantity: { increment: quantityToCart }
        },
        create: {
            productId: productId,
            cartId: cartId,
            quantity: quantityToCart
        }
    })

    return result
}

// CART - READ cartItem
export const getCartItem = async(cartId: number, productId: number) => {
    const result = prisma.cartItem.findUnique({
            where: {productId_cartId: {
                productId: productId,
                cartId: cartId
            }
        }
    })
    return result
}

// CART - DELETE cartItem
export const deleteCartItemByProductId = async (userEmail: string, deletedProductId: number) => {
    const result = prisma.user.update({
        where: { email: userEmail },
        data: {
        cart: {
            update: {
                cartItems: {
                    deleteMany: [{ productId: deletedProductId }],
                    }
                }
            }
        }
        }
    );  
    return result  
}

// CART - CHANGE quantity of product in cartItem
export const changeQuantity = async (cartId: number, productId: number, amount: number) => {
    const result = prisma.cartItem.update({
        where: {
            productId_cartId: {
                productId: productId,
                cartId: cartId
            },
        },
        data: {
            quantity: { increment: amount }
        },
    })     
    return result
}

// CART - clear cart for current user 
export const clearCart = async(userId: number) => {
    const result = prisma.cart.update({
        where: {
            userId: userId
        },
        data: {
            cartItems: {
                deleteMany: {},
            }
        }
    })
    return result
}

// PRODUCT - GET by productId
export const getProductById = async (productId: number) => {
    const result = prisma.product.findUnique({
        where:
        {
            id: productId
        },
        include: {
            categories: true
        }
    })
    return result
}

// PRODUCT - decrement product amount in stock
export const changeProductAmountInStock = async (productId: number, amount: number) => {
    const result = prisma.product.update({
            where: {
                id: productId
            },
            data: {
                stock: { increment: amount}
            }
        })
    return result
}

// ADDRESS - get main address
export const getMainAddress = async(userId: number) => {
    const result = prisma.address.findFirst({
        where: {
            userId: userId,
            isMain: true
        }
    })    
    return result
}

export const getFirstAddress = async(userId: number) => {
    const result = prisma.address.findFirst({
        where: {
            userId: userId,
        }
    })    
    return result
}

// ADDRESS - create new address
export const createAddress = async(
    country: string, 
    province: string, 
    city: string, 
    postalCode: string, 
    completeAddress: string, 
    isMain: boolean, 
    userId: number) => {

    if(isMain) {
        console.log("UPDATING MANY ADDRESSES")
        await prisma.address.updateMany({
            where: {
                userId: userId
            },
            data: {
                isMain: false
            }
        })
    }

    const result = prisma.address.create({
        data: {
            country: country,
            province: province,
            city: city,
            postalCode: postalCode,
            completeAddress: completeAddress,
            isMain: isMain,
            user: {
                connect: {
                    id: userId
                }
            }
        }
    })
    return result
}



// ORDER - create
export const createOrder = async(userId: number, totalAmount: number, status: string, items: SavedItem[], addressId: number) => {
    const result = prisma.order.create({
        data: {
            user: { connect: { id: userId } },
            totalAmount: totalAmount,
            status: OrderStatus.PLACED,
            orderItems: {
                create: items.map((item) => ({
                    product: { connect: { id: item.product.id } },
                    quantity: item.quantity,
                    priceAtPurchase: new Prisma.Decimal(Number(item.product.price))
                }))
            },
            address: { connect: {id: addressId} },
        }
    });
    return result;
}

// ORDER - get last order

export const getLastOrder = async(userId: number) => {
    const result = await prisma.order.findFirst({
        where: { userId: userId },
        orderBy: { createdAt: "desc" },
        include: {
            orderItems: {
                include: {
                    product: true
                }
            }
        }
    });
    return result
}