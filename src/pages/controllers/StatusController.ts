import { NextApiRequest, NextApiResponse } from "next"
import { StatusService } from "../services/StatusService"

export class StatusController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const statusService = new StatusService()
            const response = await statusService.execute();
            return res.status(200).json(response)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ error: err.message })
            }
            return res.status(400).json({ error: 'Erro ao fazer a requisição' })
        }
    }
}