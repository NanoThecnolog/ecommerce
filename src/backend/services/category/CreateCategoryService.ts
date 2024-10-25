import prismaClient from "@/prisma/prisma";

export class CreateCategoryService {
    async execute(name: string) {
        const categoryExist = await prismaClient.category.findUnique({
            where: { name }
        })
        if (categoryExist) throw new Error("Categoria já cadastrada")
        const createCategory = await prismaClient.category.create({
            data: {
                name
            }, select: {
                id: true,
                name: true,
            }
        })
        return createCategory
    }
}