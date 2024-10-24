import prismaClient from '@/prisma/prisma';

export class StatusService {
    async execute() {
        const statusRequest = 'funcionando'
        return statusRequest
    }
}