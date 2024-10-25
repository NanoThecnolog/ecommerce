import prismaClient from "@/prisma/prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export class AuthUserService {
    async execute(email: string, password: string) {
        const userExiste = await prismaClient.user.findUnique({
            where: { email }
        })
        if (!userExiste) throw new Error("Usuário não encontrado")
        const passwordMatch = await compare(password, userExiste.password)
        if (!passwordMatch) throw new Error("Senha incorreta.")
        const secret = process.env.SECRET_JWT
        if (!secret) throw new Error("Variável de ambiente não definida")
        const token = await sign(
            {
                name: userExiste.name,
                email: userExiste.email,

            }, secret,
            {
                subject: userExiste.id,
                expiresIn: '30d'
            }
        )
        return {
            id: userExiste.id,
            name: userExiste.name,
            email: userExiste.email,
            token
        }
    }
}