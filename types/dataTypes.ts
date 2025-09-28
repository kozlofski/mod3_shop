import { Decimal } from "@/prisma/generated/prisma/runtime/library";

export type RegisterData = {
    email: string,
    mobile: string,
    password: string,
    confirm: string,
    country: string
}

export type NewAddressData = {
    country: string,
    province: string,
    city: string,
    postalCode: string,
    completeAddress: string,
    // isMain: boolean
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

export type OrderItemWithProduct = {
    orderId: number;
    productId: number;
    quantity: number;
    price: Decimal;
    product: {
        id: number;
        name: string;
        description: string | null;
        price: Decimal;
        stock: number;
        imageUrls: string[];
    };
};

export type SavedItem = {
    cartId: number,
    productId: number,
    quantity: number,
    product: {
        id: number,
        name: string,
        description: string,
        price: string,
        stock: number,
        imageUrls: []
    }
}


