import prismaClient from "@/prisma/prisma";

export class CreateProductService {
    async execute(name: string, description: string, price: number, brand: string, skuid: string, model: string, categoryId: string) {
        const categoryExist = await prismaClient.category.findUnique({
            where: { id: categoryId }
        })
        console.log(categoryId)
        if (!categoryExist) throw new Error("Essa categoria não existe!")
        const produto = await prismaClient.produto.create({
            data: {
                name,
                description,
                price,
                brand,
                SKUID: skuid,
                model,
                categoryID: categoryId
            }
        })
        return produto
    }
}