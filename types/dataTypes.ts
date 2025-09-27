import { Decimal } from "@/prisma/generated/prisma/runtime/library";

export type RegisterData = {
    email: string,
    mobile: string,
    password: string,
    confirm: string,
    country: string
}

export type LoginData = {
    emailOrMobile: string,
    password: string,
}

export type CartWithProductInfo = {
    cartItems: ({
        product: {
            id: number;
            name: string;
            description: string | null;
            price: Decimal;
            stock: number;
            imageUrls: string[];
        };
    } & {
        cartId: number;
        productId: number;
        quantity: number;
    })[];
} & {
    id: number;
    userId: number;
    totalAmount: Decimal;
}

export type CartItemWithProduct = {   
    product: {
        id: number;
        name: string;
        description: string | null;
        price: Decimal;
        stock: number;
        imageUrls: string[];
    };
} & {
    cartId: number;
    productId: number;
    quantity: number;
}


