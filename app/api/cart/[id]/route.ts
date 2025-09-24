import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { changeProductAmountInStock, changeQuantity, deleteCartItemByProductId, getCartItem, getCurrentUserWithCartWithItems, getProductById } from "@/lib/prismaQueries";
import { prisma } from "@/prisma/clientSingleton";

type Params = Promise<{ id: string }>;

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email

    if (!session || !userEmail) {
        return new Response(JSON.stringify({ message: "You must be logged in." }), {
            status: 401,
            headers: { "Content-Type": "application/json" }
        });
    }
    
    try {    
        const user = await getCurrentUserWithCartWithItems(userEmail)
        if(!user) throw new Error("server error")
        const cart = user.cart        
        return NextResponse.json({ cart }, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'server error'}, {status: 500})
    }
}

export async function PATCH(req: Request, segmentData: { params: Params }) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email
    const params = await segmentData.params;
    const editedProductId = parseInt(params.id);
    const body: Record<string, string> = await req.json();
    const { amount } = body

    if (!session || !userEmail) {
        return new Response(JSON.stringify({ message: "You must be logged in." }), {
            status: 401,
            headers: { "Content-Type": "application/json" }
        });
    }
    
    try {    
        const user = await getCurrentUserWithCartWithItems(userEmail)
        if(!user) throw new Error("server error")
        const cart = user.cart    
        if(!cart) throw new Error()

        const itemToEdit = await prisma.cartItem.findUnique({
                where: {
                productId_cartId: {
                    productId: editedProductId,
                    cartId: cart.id
                },
            },
        })
        if(!itemToEdit) throw new Error()

        const product = await getProductById(editedProductId)
            
        if(!product) 
            return NextResponse.json({message: 'product not found'}, {status: 404})

        const currentQuantityInCart = itemToEdit?.quantity
        const newQuantityInCart = currentQuantityInCart + parseInt(amount)
        
        if(parseInt(amount) > 0) {
            console.log("Adding to cart, removing from stock")
            const {stock: itemsLeft, name: productName } = product
            if(itemsLeft === 0) 
                return NextResponse.json({message: `product ${productName} is currently out of stock`}, {status: 404})
            await changeProductAmountInStock(editedProductId, parseInt(amount) * -1)            
        } else if(parseInt(amount) < 0) {
            console.log("Removing from cart, adding to stock")
            await changeProductAmountInStock(editedProductId, parseInt(amount) * -1)
        }
        
        if(newQuantityInCart === 0) {
            console.log("Quantity zeroed")
            deleteCartItemByProductId(userEmail, editedProductId)
            return NextResponse.json({ message: `product removed from your cart`}, {status: 200})
        }
    
        await changeQuantity(cart.id, editedProductId, parseInt(amount))
       
        return NextResponse.json({ message: `amount changed by ${amount}`, newAmount: newQuantityInCart}, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'server error'}, {status: 500})
    }
}

export async function DELETE(req: NextRequest, segmentData: { params: Params }) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email
    const params = await segmentData.params;
    const deletedProductId = parseInt(params.id);

    if (!session || !userEmail)         
        return NextResponse.json({ message: "you must be logged in" }, {status: 401})

    try {
        const user = await getCurrentUserWithCartWithItems(userEmail)
        if(!user || !user.cart) throw new Error()
        const cartId = user.cart.id    
        const cartItem = await getCartItem(cartId, deletedProductId)
        if(!cartItem) throw new Error()
        const quantityBeforeDelete = cartItem.quantity
        await changeProductAmountInStock(deletedProductId, quantityBeforeDelete)
        await deleteCartItemByProductId(userEmail, deletedProductId)    

        return NextResponse.json({ message: `product removed from your cart` }, {status: 204})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'server error' }, {status: 500})
    }
}