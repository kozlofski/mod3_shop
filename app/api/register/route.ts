import { hashPassword } from "@/lib/auth";
import { createNewUser } from "@/lib/prismaQueries";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body: Record<string, string> = await req.json();
    const { email, password, mobile, country } = body
    const hashedPassword = await hashPassword(password)

    try {
        await createNewUser(email, hashedPassword, mobile, country)

        return NextResponse.json({message: `user ${email} created\nplease log in`}, {status: 201})
    } catch (error) {
        if (typeof error === "object" && error !== null &&
            "code" in error && (error as { code?: string }).code === 'P2002') {
            return NextResponse.json({message: "user with given email already exists"}, {status: 400})
        
        } else {
            return NextResponse.json({message: "server error"}, {status: 500})
        }
    }
}
