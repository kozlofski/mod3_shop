import { NextRequest, NextResponse } from "next/server";
import { getMainAddress, getUserByEmail } from "@/lib/prismaQueries";
import { getUserEmail } from "@/lib/auth";

export async function GET(req: NextRequest) {
     const userEmail = await getUserEmail()
        if(!userEmail) return NextResponse.json({ message: "You must be logged in." }, { status: 401 });

    const user = await getUserByEmail(userEmail)
    if(!user) throw new Error()
    const userId = user.id

    try {
       const address = await getMainAddress(userId)
       return NextResponse.json({message: "Main address fetched", address: address}, { status: 200});
    } catch (error) {       
        console.log(error)
        return NextResponse.json({error: "Internal server error"}, { status: 500 });
    }
}
