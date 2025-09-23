import { prisma } from "@/prisma/clientSingleton";

export const getCurrentUserWithCartWithItems = async (userEmail: string) => {
    const result = prisma.user.findUnique({
        where: {
            email: userEmail
        },
        include: {
            cart: {
                include: {
                    cartItems: {
                        include: {
                            product: true
                        }
                    }
                }
            }
        }
    });

    return result
}