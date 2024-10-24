import { ListCategoryService } from "@/pages/services/category/ListCategoryService";
import { NextApiRequest, NextApiResponse } from "next";

export class ListCategoryController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const listService = new ListCategoryService
            const list = await listService.execute();
            return res.status(200).json(list)
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({ error: err.message })
            return res.status(500).json({ error: "Erro ao buscar categorias" })
        }
    }
}