import { EditUserService } from "@/pages/services/user/EditUserService";
import { NextApiRequest, NextApiResponse } from "next";

export class EditUserController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const editService = new EditUserService();
            const { id, name, newPassword } = req.body;
            if (!id) return res.status(400).json({ error: "Id não definido." })
            const userEdited = await editService.execute(id, name, newPassword)
            return res.status(200).json(userEdited)
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({ error: err.message })
            return res.status(500).json({ error: "Erro ao editar usuario." })
        }
    }
}