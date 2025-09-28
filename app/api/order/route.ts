import { NextResponse } from "next/server";
import { getLastOrder, getUserByEmail } from "@/lib/prismaQueries";
import { getUserEmail } from "@/lib/auth";

// get newest order
export async function GET(req: Request) {
    const userEmail = await getUserEmail()
    if(!userEmail) return NextResponse.json({ message: "You must be logged in." }, { status: 401 });
  
    const user = await getUserByEmail(userEmail)
    if(!user) throw new Error()
    const userId = user.id

    try {
        const newestOrder = await getLastOrder(userId)
        return NextResponse.json({newestOrder}, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "server error"}, {status: 500})
    }
}