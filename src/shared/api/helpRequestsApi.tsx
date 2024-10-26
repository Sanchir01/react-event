import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '~/app/store'
import { HelpRequest } from '~/shared/types'

export const helpRequestsApi = createApi({
	reducerPath: 'helpRequestsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_SERVER_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth?.token
			console.log('helpRequestsApi' + token)
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			headers.set('Content-Type', 'application/json')
			return headers
		}
	}),
	tagTypes: ['HelpRequest'],
	endpoints: builder => ({
		getAllCards: builder.query<HelpRequest[], void>({
			query: () => '/request',
			providesTags: ['HelpRequest']
		}),
		getHelpRequestById: builder.query<HelpRequest, string>({
			query: id => `/request/${id}`,
			providesTags: (result, error, id) => [{ type: 'HelpRequest', id }]
		}),
		createHelpRequest: builder.mutation<HelpRequest, Partial<HelpRequest>>({
			query: newRequest => ({
				url: '/request',
				method: 'POST',
				body: newRequest
			}),
			invalidatesTags: ['HelpRequest']
		}),
		updateHelpRequest: builder.mutation<
			HelpRequest,
			{ id: string; data: Partial<HelpRequest> }
		>({
			query: ({ id, data }) => ({
				url: `/request/${id}`,
				method: 'PUT',
				body: data
			}),
			invalidatesTags: (result, error, { id }) => [{ type: 'HelpRequest', id }]
		}),
		deleteHelpRequest: builder.mutation<
			{ success: boolean; id: string },
			string
		>({
			query: id => ({
				url: `/request/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: (result, error, id) => [{ type: 'HelpRequest', id }]
		})
	})
})

export const {
	useGetAllCardsQuery,
	useGetHelpRequestByIdQuery,
	useCreateHelpRequestMutation,
	useUpdateHelpRequestMutation,
	useDeleteHelpRequestMutation
} = helpRequestsApi
