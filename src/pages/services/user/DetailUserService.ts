import prismaClient from '@/prisma/prisma';

export class DetailUserService {
    async execute(id: string) {
        const userExiste = await prismaClient.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                upedatedAt: true
            }
        })
        if (!userExiste) throw new Error("Usuário não encontrado")
        return userExiste
    }
}