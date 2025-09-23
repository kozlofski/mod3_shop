import { prisma } from "@/prisma/clientSingleton";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

export async function DELETE(request: NextRequest, segmentData: { params: Params }) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email
    const params = await segmentData.params;
    const deletedProductId = parseInt(params.id);

    if (!session || !userEmail) {
        return new Response(JSON.stringify({ message: "You must be logged in." }), {
            status: 401,
            headers: { "Content-Type": "application/json" }
        });
    }

    try {
        const user = await prisma.user.update({
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

        return new Response(JSON.stringify({ message: `Item ${deletedProductId} removed from your cart.` }), {
            status: 200,
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