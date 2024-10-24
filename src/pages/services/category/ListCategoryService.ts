import prismaClient from "@/prisma/prisma";

export class ListCategoryService {
    async execute() {
        const list = await prismaClient.category.findMany()
        return list
    }

}