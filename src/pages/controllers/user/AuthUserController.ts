import { AuthUserService } from "@/pages/services/user/AuthUserService";
import { NextApiRequest, NextApiResponse } from "next";

export class AuthUserController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const authService = new AuthUserService();
            const { email, password } = req.body;
            const authenticate = await authService.execute(email, password)
            return res.status(200).json(authenticate)

        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ error: err.message })
            }
            return res.status(500).json({ error: "Erro ao autenticar usuário." })
        }
    }
}