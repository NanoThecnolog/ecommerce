import prismaClient from "@/prisma/prisma";
import { compare, hash } from "bcryptjs";

export class EditUserService {
    async execute(id: string, name?: string, newPassword?: string) {
        const userExiste = await prismaClient.user.findUnique({ where: { id } })
        if (!userExiste) throw new Error("Usuário não encontrado.")
        const equalPassword = newPassword ? await compare(newPassword, userExiste.password) : false;
        if (equalPassword) {
            throw new Error("A nova senha não pode ser igual a antiga.")
        }
        const passwordHash = newPassword ? await hash(newPassword, 8) : userExiste.password;
        const editarDados = await prismaClient.user.update({
            where: { id },
            data: {
                name: name ? name : userExiste.name,
                password: passwordHash
            }, select: {
                id: true,
                name: true,
                email: true,
            }
        })
        return editarDados
    }
}