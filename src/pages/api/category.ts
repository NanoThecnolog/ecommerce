import { NextApiRequest, NextApiResponse } from "next";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryController } from "../controllers/category/ListCategoryController";

export default async function Category(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const createController = new CreateCategoryController();
        const category = await createController.handle(req, res)
        return category
    } else if (req.method === 'GET') {
        const listController = new ListCategoryController;
        const list = await listController.handle(req, res)
        return list
    }
}