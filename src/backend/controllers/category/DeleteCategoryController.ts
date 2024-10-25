import { NextApiRequest, NextApiResponse } from "next";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

export class DeleteCategoryController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const deleteService = new DeleteCategoryService();
            const { categoryId } = req.query;
            if (!categoryId) return res.status(400).json({ error: "Id da categoria não enviado" })
            const deleteCategory = await deleteService.execute(categoryId as string)
            return res.status(200).json(deleteCategory)
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({ error: err.message })
            return res.status(500).json({ error: "Erro interno ao remover categoria." })
        }
    }
}