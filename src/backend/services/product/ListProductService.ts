import prismaClient from "@/prisma/prisma";

interface ProductFilters {
    categoryId?: string;
    orderBy?: 'price' | 'createdAt';
    sortOrder?: 'asc' | 'desc';
}

export class ListProductService {
    async execute(filters: ProductFilters) {
        const { categoryId, orderBy = 'createdAt', sortOrder = 'asc' } = filters;

        if (categoryId) {
            const categoryExist = await prismaClient.category.findUnique({
                where: { id: categoryId }
            })
            if (!categoryExist) throw new Error("Categoria não existe.")
        }

        const listProduct = await prismaClient.produto.findMany({
            where: {
                categoryID: categoryId ? categoryId : undefined
            },
            orderBy: {
                [orderBy]: sortOrder
            },
            include: {
                category: true
            },

        })
        return listProduct
    }
}