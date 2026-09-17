import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }),
    email: z.string({
        required_error: 'Email is required',
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(5, {
        message: 'Password debe de ser de al menos 5 caracteres',
    }),

});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    }).refine(
        (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        {
            message: 'Email is not valid',
        }
    ),
    password: z.string({
        required_error: 'Password is required',
    }).min(5, {
        message: 'Password debe de ser de al menos 5 caracteres',
    }),
});