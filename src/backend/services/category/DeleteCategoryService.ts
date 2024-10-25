import prismaClient from "@/prisma/prisma";

export class DeleteCategoryService {
    async execute(categoryId: string) {
        const categoryExist = await prismaClient.category.findUnique({ where: { id: categoryId } })
        if (!categoryExist) throw new Error("Categoria não encontrada.")
        const deleteCategory = await prismaClient.category.delete({ where: { id: categoryId } })
        return {
            deleteCategory,
            status: "Categoria removida."
        }
    }
}