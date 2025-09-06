import {PrismaClient} from './generated/prisma/client'
import {productData, categoryData} from "./seedData"

const prisma = new PrismaClient()

async function main() {
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    for(const product of productData) {
        await prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock,
                imageUrls: product.imageUrls,
                categories: {
                    connectOrCreate: product.categories.map((categoryName) => {
                        return {
                            where: { name: categoryName },
                            create: { name: categoryName }
                        }
                    })
                }
            },
        })
    }


    // const productSeedingResult = await prisma.product.createManyAndReturn({ data: productData })
    // console.log(`Created products: \n${productSeedingResult}`)
    
    // const categorySeedingResult = await prisma.category.createManyAndReturn({ data: categoryData})
    // console.log(`Created categories: \n${categorySeedingResult}`)



}

main().catch((e)=> {
    console.log(e)
    process.exit(1)
})
.finally(()=>{
    prisma.$disconnect()
})