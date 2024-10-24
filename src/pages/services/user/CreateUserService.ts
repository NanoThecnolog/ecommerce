import prismaClient from '@/prisma/prisma';
import { hash } from 'bcryptjs';


export class CreateUserService {
    async execute(name: string, email: string, password: string) {
        const userExiste = await prismaClient.user.findUnique({
            where: { email: email }
        })
        if (userExiste) throw new Error("Email já cadastrado no sistema")
        const passwordHash = await hash(password, 8)
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: passwordHash
            }, select: {
                id: true,
                name: true,
                email: true
            }
        })
        return user
    }
}