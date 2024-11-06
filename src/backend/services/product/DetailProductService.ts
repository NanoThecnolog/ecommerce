import prismaClient from "@/prisma/prisma";

export class DetailProductService {
    async execute(id: string) {
        const produto = await prismaClient.produto.findUnique({
            where: { id }
        })
        if (!produto) throw new Error("Produto não encontrado!")
        return produto
    }
}