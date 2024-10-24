import { NextApiRequest, NextApiResponse } from "next";
import { StatusController } from "../controllers/StatusController";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const controller = new StatusController();
        const response = await controller.handle(req, res)
        return res.status(200).json(response)
    } else {
        res.status(405).json({ message: 'Wrong method' })
    }
}