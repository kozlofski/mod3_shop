import { hashPassword } from "@/lib/auth";
import { prisma } from "@/prisma/clientSingleton";

export async function POST(request: Request) {
    const body: Record<string, string> = await request.json();
    console.log("ROUTE: ", body);
    const { email, password, mobile } = body

    const hashedPassword = await hashPassword(password)
    console.log(hashedPassword)

    try {
        const result = await prisma.user.create({
            data: {
                email: email,
                passwordHash: hashedPassword,
                mobile: mobile,
                cart: { 
                    create: {
                        totalAmount: 0
                    }
                }
            }
        }) 
        console.log("Created: ", result)       
    } catch (error) {
        // #fixme find proper type for error
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof error === "object" 
            && error !== null 
            && "code" in error 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            && (error as any).code === 'P2002') {
        return new Response(
            JSON.stringify({ message: "User with given email address already exists" }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" }
            }
        );
        } else {
            console.log("ERROR FROM DB:", error)
        }
    }

    return new Response(JSON.stringify({ message: "User created" }), {
        status: 201,
        headers: { "Content-Type": "application/json" }
    });
}
