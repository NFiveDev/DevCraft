import { z } from 'zod';

export const validateEmail = (mail: string | undefined | null) => {
    const emailSchema = z.object({
        email: z.string().email().min(5),
    });
    return emailSchema.safeParse(mail).success;
};
