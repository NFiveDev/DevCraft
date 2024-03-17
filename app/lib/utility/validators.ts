import { z } from 'zod';

export const validateEmail = (mail: string | undefined | null) => {
    const emailSchema = z.object({
        email: z.string().email().min(5),
    });
    return emailSchema.safeParse(mail).success;
};

export const validatePassword = (password: string | undefined | null) => {
    const passwordSchema = z.object({
        password: z.string().min(8).max(16)
    })

    return passwordSchema.safeParse(password).success;
}
