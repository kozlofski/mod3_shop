import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { getProductById } from "@/lib/prismaQueries";

type Params = Promise<{ id: string }>;

export async function GET(request: NextRequest, segmentData: { params: Params }) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email
    const params = await segmentData.params;
    const productId = parseInt(params.id);

    if (!session || !userEmail) {
        return NextResponse.json({ message: "You must be logged in." }, {status: 401});
    }

    try {
        const product = await getProductById(productId)      
        return NextResponse.json({product});
    } catch (error) {       
        console.log(error)
        return NextResponse.json({error: "Internal server error"}, { status: 500 });
    }
}
