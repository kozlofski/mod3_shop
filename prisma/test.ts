import {PrismaClient} from './generated/prisma/client'

const prisma = new PrismaClient()

async function main() {
    const productResult = await prisma.product.findMany({
        include: {
            categories: true,
        }
    })
    console.log(productResult)
    
}

main().catch((e)=> {
    console.log(e)
    process.exit(1)
})
.finally(()=>{
    prisma.$disconnect()
})