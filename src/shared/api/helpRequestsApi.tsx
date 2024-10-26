import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface HelpRequest {
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

export const helpRequestsApi = createApi({
	reducerPath: 'helpRequestsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4040',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as any).auth?.token
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			headers.set('Content-Type', 'application/json')
			return headers
		}
	}),
	endpoints: builder => ({
		getHelpRequests: builder.query<HelpRequest[], void>({
			query: () => '/api/request'
		})
	})
})

export const { useGetHelpRequestsQuery } = helpRequestsApi
