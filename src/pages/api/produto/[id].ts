import { DetailProductController } from "@/backend/controllers/product/DetailProductController";
import { NextApiRequest, NextApiResponse } from "next";

export default async function ProductDetail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const detailController = new DetailProductController();
        const produto = await detailController.handle(req, res);
        return produto
    } else {
        return res.status(400).json({ error: "Método não permitido." })
    }
}