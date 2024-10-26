import { z } from 'zod'

export const HelpRequestTypes = z.object({
	id: z.string(),
	title: z.string(),
	organization: z.object({ title: z.string(), isVerified: z.boolean() }),
	description: z.string(),
	goalDescription: z.string(),
	actionsSchedule: z.array(
		z.object({ stepLabel: z.string(), isDone: z.boolean() })
	),
	endingDate: z.string(),
	location: z.object({
		latitude: z.number(),
		longitude: z.number(),
		district: z.string(),
		city: z.string()
	}),
	contacts: z.object({
		email: z.string(),
		phone: z.string(),
		website: z.string()
	}),
	requesterType: z.string(),
	helpType: z.string(),
	helperRequirements: z.object({
		helperType: z.string(),
		isOnline: z.boolean(),
		qualification: z.string()
	}),
	contributorsCount: z.number(),
	requestGoal: z.number(),
	requestGoalCurrentValue: z.number()
})
export interface HelpRequest {
	id: string
	title: string
	organization: {
		title: string
		isVerified: boolean
	}
	description: string
	goalDescription: string
	actionsSchedule: {
		stepLabel: string
		isDone: boolean
	}[]
	endingDate: string
	location: {
		latitude: number
		longitude: number
		district: string
		city: string
	}
	contacts: {
		email: string
		phone: string
		website: string
	}
	requesterType: string
	helpType: string
	helperRequirements: {
		helperType: string
		isOnline: boolean
		qualification: string
	}
	contributorsCount: number
	requestGoal: number
	requestGoalCurrentValue: number
}

export interface FilterCriteria {
	categories?: string[]
	specialization?: string[]
	format?: string[]
	volunteerType?: string[]
	date?: string
}
