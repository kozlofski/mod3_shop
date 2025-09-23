import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { deleteCartItemByProductId, getCurrentUserWithCartWithItems } from "@/lib/prismaQueries";

type Params = Promise<{ id: string }>;

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
        const user = await getCurrentUserWithCartWithItems(userEmail)
        if(!user) throw new Error("server error")
        const cart = user.cart        
        return NextResponse.json({ cart }, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'server error'}, {status: 500})
    }
}

export async function DELETE(req: NextRequest, segmentData: { params: Params }) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email
    const params = await segmentData.params;
    const deletedProductId = parseInt(params.id);

    if (!session || !userEmail)         
        return NextResponse.json({ message: "you must be logged in" }, {status: 401})

    try {
        await deleteCartItemByProductId(userEmail, deletedProductId)    

        return NextResponse.json({ message: `product removed from your cart` }, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'server error' }, {status: 500})
    }
}