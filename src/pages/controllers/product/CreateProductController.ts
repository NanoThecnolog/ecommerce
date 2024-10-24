import { NextApiRequest, NextApiResponse } from "next";
import { CreateProductService } from "../../services/product/CreateProductService";

export class CreateProductController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const createProductService = new CreateProductService();
            const { name, price, description, categoryId, brand, model, skuid } = req.body;
            if (!name || !description || price <= 0 || !categoryId || !brand || !model || !skuid) {
                return res.status(400).json({ error: "Dados inválidos ou vazios." });
            }
            const product = await createProductService.execute(name, description, price, brand, skuid, model, categoryId,)
            return res.status(200).json(product)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ error: err.message })
            }
            return res.status(500).json({ error: "Erro interno ao criar produto" })
        }
    }
}