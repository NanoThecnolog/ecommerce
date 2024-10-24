import { CreateCategoryService } from "@/pages/services/category/CreateCategoryService";
import { NextApiRequest, NextApiResponse } from "next";

export class CreateCategoryController {
    async handle(req: NextApiRequest, res: NextApiResponse) {
        try {
            const createService = new CreateCategoryService;
            const { name } = req.body
            const category = await createService.execute(name)
            return res.status(200).json(category)
        } catch (err) {
            if (err instanceof Error) return res.status(400).json({ error: err.message })
            return res.status(500).json({ error: "Erro na requisição " })
        }
    }
}
/*
aposentadoria por tempo de contribuição, usando a lei de 2019, antes da constituinte, o valor da aposentadoria for melhor do que ela espera,
ela pode recusar e dar entrada novamente depois de um tempo por idade ou por tempo de trabalho na lei nova?
*/