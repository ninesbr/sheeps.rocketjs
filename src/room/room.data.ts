import {z} from 'zod';

export const RoomSchema = z.object({
    token: z.string({ required_error: 'Must be at least 2 characters'}).min(1, {message: 'Must be at least 2 characters'}),
});

export type RoomInput = z.infer<typeof RoomSchema>;