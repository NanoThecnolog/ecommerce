import { NextApiRequest, NextApiResponse } from "next";
import { DeleteProductService } from "../../services/product/DeleteProductService";

export class DeleteProductController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const deleteService = new DeleteProductService()
            const { productId } = req.query;
            const deleteProduct = await deleteService.execute(productId as string)
            return res.status(200).json(deleteProduct)
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({ error: err.message })
            return res.status(500).json({ error: "Erro ao deletar produto." })
        }
    }
}