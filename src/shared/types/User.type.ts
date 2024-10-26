import { z } from 'zod'

export type UserType = z.infer<typeof userSchema>

export const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	lastName: z.string(),
	birthdate: z.string(),
	status: z.string(),
	baseLocations: z.array(
		z.object({
			latitude: z.number(),
			longitude: z.number(),
			district: z.string(),
			city: z.string()
		})
	),
	educations: z.array(
		z.object({
			organizationName: z.string(),
			level: z.string(),
			specialization: z.string(),
			graduationYear: z.number()
		})
	),
	additionalInfo: z.string(),
	contacts: z.object({
		email: z.string(),
		phone: z.string(),
		social: z.object({
			telegram: z.string(),
			whatsapp: z.string(),
			vk: z.string()
		})
	}),
	favouriteRequests: z.array(z.string())
})
