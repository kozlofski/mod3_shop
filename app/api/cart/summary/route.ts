import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { getCurrentUserWithCartWithItems } from "@/lib/prismaQueries";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, res: NextResponse) {
    // #todo move auth into middleware
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email

    if (!session || !userEmail)         
        return NextResponse.json({message: "you must be logged in"}, {status: 401})
    
    try {
        const user = await getCurrentUserWithCartWithItems(userEmail)
        const cart = user?.cart
        if(!cart) throw new Error("server error")

        const cartItems = cart?.cartItems
        const totalAmount = cartItems.reduce((sum: number, item) => {
            return sum + item.quantity * parseInt(item.product.price.toString())
        }, 0)

        const totalItems = cartItems.reduce((items: number, item) => {
            return items + item.quantity
        }, 0)
        console.log("Total amount", totalAmount, "total items:", totalItems)
        console.log("Cart summary:", cart)
        
        return NextResponse.json({ totalAmount, totalItems }, {status: 200})        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "server error"}, {status: 500})
    }

}