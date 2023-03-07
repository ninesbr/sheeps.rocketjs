import {z} from 'zod';

export const VisitorSchema = z.object({
    phone: z.string({required_error: 'Must be at least 2 characters'}).min(1, {message: 'Must be at least 2 characters'}),
});

export type VisitorInput = z.infer<typeof VisitorSchema>;
