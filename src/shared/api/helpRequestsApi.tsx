import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '~/app/store'
import { HelpRequest } from '~/shared/types'

export const helpRequestsApi = createApi({
	reducerPath: 'helpRequestsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4040',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth?.token
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
			query: () => '/api/request',
			providesTags: ['HelpRequest']
		}),
		getHelpRequestById: builder.query<HelpRequest, string>({
			query: id => `/api/request/${id}`,
			providesTags: (result, error, id) => [{ type: 'HelpRequest', id }]
		}),
		createHelpRequest: builder.mutation<HelpRequest, Partial<HelpRequest>>({
			query: newRequest => ({
				url: '/api/request',
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
				url: `/api/request/${id}`,
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
				url: `/api/request/${id}`,
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
