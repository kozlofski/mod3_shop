import { prisma } from "@/prisma/clientSingleton";

// USER - CREATE (register)
export const createNewUser = async(email: string, hashedPassword: string, mobile: string) => {
    const result = prisma.user.create({
        data: {
            email: email,
            passwordHash: hashedPassword,
            mobile: mobile,
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

// CART - CREATE or UPDATE cartItem
export const createOrUpdateCartItem = async (cartId: number, productId: number) => {
    const result = prisma.cartItem.upsert({
        where: {
        productId_cartId: {
            productId: productId,
            cartId: cartId
        }
        },
        update: {
            quantity: { increment: 1 }
        },
        create: {
            productId: productId,
            cartId: cartId,
            quantity: 1
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
