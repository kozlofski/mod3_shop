import { NextRequest, NextResponse } from "next/server";
import { clearCart, createAddress, createOrder, getUserByEmail } from "@/lib/prismaQueries";
import { getUserEmail } from "@/lib/auth";
import { SavedItem } from "@/types/dataTypes";

type Params = Promise<{ id: string }>;

export async function POST(req: NextRequest, segmentData: { params: Params }) {
     const userEmail = await getUserEmail()
        if(!userEmail) return NextResponse.json({ message: "You must be logged in." }, { status: 401 });

    const user = await getUserByEmail(userEmail)
    if(!user) throw new Error()
    const userId = user.id
    const body = await req.json();
    const {addressId} = body
    console.log("addressId: ", addressId)

    const items: SavedItem[] = body.items

    if(!addressId) {
        const {country, province, city, postalCode, completeAddress, isMain, grandTotal} = body
    
        try {
           const {id: newAddressId} = await createAddress(country, province, city, postalCode, completeAddress, isMain, userId)
           const order = await createOrder(userId, Number(grandTotal), "placed", items, newAddressId)
           await clearCart(userId)
           return NextResponse.json({message: "New address created. Order placed", order: order}, { status: 201});
        } catch (error) {       
            console.log(error)
            return NextResponse.json({error: "Internal server error"}, { status: 500 });
        }
    } else {
        const existingAddressId = Number(addressId)
        const {grandTotal} = body
        try {
            const order = await createOrder(userId, Number(grandTotal), "placed", items, existingAddressId)
            await clearCart(userId)
            return NextResponse.json({message: "New address created. Order placed", order: order}, { status: 201});
        } catch (error) {
            console.log(error)
            return NextResponse.json({error: "Internal server error"}, { status: 500 });
        }
    }

}
