import { z } from 'zod'

export type InputLoginType = z.infer<typeof LoginSchema>

export const LoginSchema = z.object({
	login: z.string().email('Please enter a valid email'),
	password: z.string().min(2, 'Please enter a password')
})

export interface ILoginResponse {
	auth: boolean
	token: string
}
