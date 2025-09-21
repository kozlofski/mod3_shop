import { prisma } from "@/prisma/clientSingleton";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email

    if (!session || !userEmail) {
        return new Response(JSON.stringify({ message: "You must be logged in." }), {
            status: 401,
            headers: { "Content-Type": "application/json" }
        });
    }

    const body = await request.json()
    const itemId = parseInt(body.itemId)

    try {
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            include: { cart: true }
        });

        if(!user || !user.cart) return

        const cartId = user.cart.id;
        console.log("Found cart:", cartId)

        const product = await prisma.product.findUnique({
            where:
            {
                id: itemId
            }
        })
        if(!product) return

        const {stock: itemsLeft, name: productName } = product

        if(itemsLeft === 0) {
            return new Response(JSON.stringify({ message: `Item ${productName} is out of stock` }), {
            status: 404,
            headers: { "Content-Type": "application/json" }
        });}

        const updatedProduct = await prisma.product.update({
            where: {
                id: itemId
            },
            data: {
                stock: { decrement: 1}
            }
        })



        const newOrUpdatedCartItem = await prisma.cartItem.upsert({
            where: {
            productId_cartId: {
                productId: itemId,
                cartId: cartId
            }
            },
            update: {
                quantity: { increment: 1 }
            },
            create: {
                productId: itemId,
                cartId: cartId,
                quantity: 1
            }
        })

        const {quantity: quantityInCart } = newOrUpdatedCartItem

        return new Response(JSON.stringify({ message: `Item ${productName} (total: ${quantityInCart}) added to cart.` }), {
            status: 201,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }


}

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email

    if (!session || !userEmail) {
        return new Response(JSON.stringify({ message: "You must be logged in." }), {
            status: 401,
            headers: { "Content-Type": "application/json" }
        });
    }
    
    try {
        const result = await prisma.user.findMany({
            where: {
                email: userEmail
            },
            include: {
                cart: {
                    include: {
                        cartItems: true
                    }
                }
            }
        });

        const cart = result[0]?.cart
        const message = cart ? "Cart has order items" : "Cart is empty" 
        
        return new Response(JSON.stringify({
            message: message,
            items: cart
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
        
    } catch (error) {
        console.log(error)
    }

}