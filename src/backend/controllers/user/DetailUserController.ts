import { NextApiRequest, NextApiResponse } from "next";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const detailService = new DetailUserService();
            const { id } = req.query;
            if (!id) return res.status(400).json({ error: "Id do usuário não enviado." })
            const user = await detailService.execute(id as string);
            return res.status(200).json(user)
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({ error: err.message })
            return res.status(500).json({ error: "Erro interno ao buscar dados do usuário." })
        }
    }
}