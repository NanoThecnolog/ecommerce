import { NextApiRequest, NextApiResponse } from "next";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

export class CreateCategoryController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const createService = new CreateCategoryService();
            const { name } = req.body
            const category = await createService.execute(name)
            return res.status(200).json(category)
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({ error: err.message })
            return res.status(500).json({ error: "Erro na requisição " })
        }
    }
}