import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/lib/prismaQueries";
import { getUserEmail } from "@/lib/auth";

type Params = Promise<{ id: string }>;

export async function GET(request: NextRequest, segmentData: { params: Params }) {
    const userEmail = await getUserEmail()
    if(!userEmail) return NextResponse.json({ message: "You must be logged in." }, { status: 401 });
    
    const params = await segmentData.params;
    const productId = parseInt(params.id);

   

    try {
        const product = await getProductById(productId)      
        return NextResponse.json({product});
    } catch (error) {       
        console.log(error)
        return NextResponse.json({error: "Internal server error"}, { status: 500 });
    }
}
