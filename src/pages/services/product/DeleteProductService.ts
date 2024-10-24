import prismaClient from "@/prisma/prisma";

export class DeleteProductService {
    async execute(productId: string) {
        const productExist = await prismaClient.produto.findUnique({ where: { id: productId } })
        if (!productExist) throw new Error("Produto não encontrado.")
        const deleteProduct = await prismaClient.produto.delete({ where: { id: productId } })
        return `Produto ${deleteProduct.name} removido.`
    }
}