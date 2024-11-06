import { DetailProductService } from "@/backend/services/product/DetailProductService";
import { NextApiRequest, NextApiResponse } from "next";

export class DetailProductController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { id } = req.query;
            const detailService = new DetailProductService();
            const produto = await detailService.execute(id as string)
            return res.status(200).json(produto)
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({ error: err.message })
            return res.status(500).json({ error: "Erro ao buscar detalhes do produto." })
        }
    }
}