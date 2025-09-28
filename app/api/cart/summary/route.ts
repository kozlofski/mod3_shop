import { getCurrentUserWithCartWithItems } from "@/lib/prismaQueries";
import { NextRequest, NextResponse } from "next/server";
import { getUserEmail } from "@/lib/auth";


export async function GET(req: NextRequest, res: NextResponse) {
   const userEmail = await getUserEmail()
       if(!userEmail) return NextResponse.json({ message: "You must be logged in." }, { status: 401 });
    
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