import { prisma } from "@/prisma/clientSingleton";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export async function POST() {

}

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);

    console.log("Session Inside cart get:", session);

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