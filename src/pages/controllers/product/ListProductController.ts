import { ListProductService } from "@/pages/services/product/ListProductService"
import { NextApiRequest, NextApiResponse } from "next"

export class ListProductController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const listProductService = new ListProductService();
            const { categoryId, orderBy = 'createdAt', sortOrder = 'asc' } = req.query
            const filters = {
                categoryId: categoryId as string,
                orderBy: orderBy as 'price' | 'createdAt',
                sortOrder: sortOrder as 'asc' | 'desc'
            }
            const list = await listProductService.execute(filters)
            return res.status(200).json(list)
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({ error: err.message })
            return res.status(500).json({ error: "Erro durante a listagem de produtos" })
        }
    }
}