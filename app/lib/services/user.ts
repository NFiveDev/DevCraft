import { User } from '@prisma/client';
import prisma from '../database/db';

enum Roles {
    STUDENT = 1,
    TEACHER = 2,
    ADMIN = 3,
}

export async function FindByEmail(email: string) {
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });

    return user;
}

export async function CreateUser({
    username,
    email,
    password,
    role = Roles.STUDENT,
}: {
    username: string;
    email: string;
    password: string;
    role: number;
}): Promise<number> {
    const user = await prisma.user.create({
        data: {
            name: username,
            email: email,
            password: password,
            created: new Date(),
            role: role,
        },
    });
    return user.id;
}
