import { NextApiRequest, NextApiResponse } from "next";
import { CreateUserController } from "../../backend/controllers/user/CreateUserController";
import { DetailUserController } from "../../backend/controllers/user/DetailUserController";
import { EditUserController } from "../../backend/controllers/user/EditUserController";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const createController = new CreateUserController();
        const creatingUser = await createController.handle(req, res);
        return creatingUser
    } else if (req.method === 'GET') {
        const detailController = new DetailUserController();
        const userData = await detailController.handle(req, res)
        return userData
    } else if (req.method === 'PUT') {
        const editController = new EditUserController();
        const editUser = await editController.handle(req, res)
        return editUser
    }
}