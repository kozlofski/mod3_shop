import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { createOrUpdateCartItem, decrementProductInStock, getCurrentUserWithCartWithItems, getProductById } from "@/lib/prismaQueries";

// Get whole cart
export async function GET(req: Request) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email

    if (!session || !userEmail)         
        return NextResponse.json({message: "you must be logged in"}, {status: 401})
    
    try {
        const user = await getCurrentUserWithCartWithItems(userEmail)
        const cart = user?.cart
        return NextResponse.json({cart}, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "server error"}, {status: 500})
    }

}

// add product to cart; productId is hidden inside request body
export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email

    if (!session || !userEmail)         
            return NextResponse.json({message: "you must be logged in"}, {status: 401})

    const body = await req.json()
    const productId = parseInt(body.itemId)

    try {
        const user = await getCurrentUserWithCartWithItems(userEmail)
        if(!user || !user.cart) 
            return NextResponse.json({message: "server error"}, {status: 500})

        const cartId = user.cart.id;
        const product = await getProductById(productId)
    
        if(!product) 
            return NextResponse.json({message: 'product not found'}, {status: 404})

        const {stock: itemsLeft, name: productName } = product

        if(itemsLeft === 0) 
            return NextResponse.json({message: `product ${productName} is currently out of stock`}, {status: 404})

        await decrementProductInStock(productId)
        const newOrUpdatedCartItem = await createOrUpdateCartItem(cartId, productId) 
        const {quantity: quantityInCart } = newOrUpdatedCartItem

        return NextResponse.json({message: `product ${productName} added to cart\n(total: ${quantityInCart})`}, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "server error"}, {status: 500})
    }
}

