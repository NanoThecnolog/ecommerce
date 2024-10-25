import { NextApiRequest, NextApiResponse } from "next";
import { CreateProductController } from "../../backend/controllers/product/CreateProductController";
import { ListProductController } from "../../backend/controllers/product/ListProductController";
import { DeleteProductController } from "../../backend/controllers/product/deleteProductController";

export default async function Product(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const createController = new CreateProductController();
        const product = await createController.handle(req, res);
        return product
    } else if (req.method === 'GET') {
        const listController = new ListProductController();
        const list = await listController.handle(req, res);
        return list
    } else if (req.method === 'DELETE') {
        const deleteController = new DeleteProductController();
        const deleteProduct = await deleteController.handle(req, res)
        return deleteProduct
    }
}