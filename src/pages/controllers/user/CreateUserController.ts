import { NextApiRequest, NextApiResponse } from "next";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const createService = new CreateUserService();
            const { name, email, password } = req.body;
            if (!name || !email || !password) return res.status(400).json({ error: "Dados para criação de conta incompletos" })
            const user = await createService.execute(name, email, password)
            return res.status(200).json(user)

        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ error: err.message })
            }
            return res.status(500).json({ error: "Erro no servidor ao criar usuário." })
        }
    }
}
