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
    const itemId = body.itemId

    console.log("Trying to add item:", itemId)

    try {
        // Find the user's cart first
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            include: { cart: true }
        });

        if(!user) return

        let cartId = user.cart.id;
        console.log("Found cart:", cartId)

        if (!cartId) {
            // Create a new cart for the user if it doesn't exist
            const newCart = await prisma.cart.create({
                data: {
                    userId: user.id,
                    totalAmount: 0
                }
            });
            cartId = newCart.id;
        }

        console.log("Cart after if:", cartId)

        const newCartItem = await prisma.cartItem.create({
            data: {
                productId: parseInt(itemId),
                cartId: cartId
            }
        })

        console.log("Order item result: ", newCartItem)
    } catch (error) {
        console.log(error)
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
                cart: true
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