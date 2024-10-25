import { NextApiRequest, NextApiResponse } from "next";
import { AuthUserController } from "../../backend/controllers/user/AuthUserController";

export default async function Auth(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const authController = new AuthUserController();
        const authenticating = await authController.handle(req, res);
        return authenticating
    } else {
        return res.status(400).json({ error: "Wrong Method" })
    }
}