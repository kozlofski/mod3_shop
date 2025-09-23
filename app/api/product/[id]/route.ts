"use server";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/clientSingleton";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

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
        const product = await prisma.product.findUnique({
            where: { id: productId},
            include: {
                categories: true
            }
        })

        return NextResponse.json(product);
    } catch (error) {       
        return NextResponse.json({error: "Internal server error"}, { status: 500 });
    }
}
