import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { HelpRequest } from '~/shared/types/HelpRequest.types.ts'
import { AuthServiceTokens } from '~/shared/utils/token.service'

export const apiHelpRequests = createApi({
	reducerPath: 'helpRequestsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_SERVER_URL
	}),
	tagTypes: ['HelpRequest'],
	endpoints: builder => ({
		getAllCards: builder.query<HelpRequest[], void>({
			query: () => ({
				url: '/request',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${AuthServiceTokens.getRefreshToken()}`
				}
			})
			// transformResponse: (res: unknown) => HelpRequestTypes.array().parse(res)
		}),
		getHelpRequestById: builder.query<HelpRequest, string>({
			query: id => ({
				url: `/request/${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${AuthServiceTokens.getRefreshToken()}`
				}
			})
			// transformResponse: (res: unknown) => HelpRequestTypes.parse(res)
		}),
		addToFavourite: builder.mutation({
			query: id => ({
				url: `/user/favourites`,
				body: {
					"requestId": id
				},
				method: 'POST',
				headers: {
					Authorization: `Bearer ${AuthServiceTokens.getRefreshToken()}`
				}
			})
			// transformResponse: (res: unknown) => HelpRequestTypes.parse(res)
		}),
		getAllFavourites: builder.query<HelpRequest, string>({
			providesTags: ['favourites'],
			query: () => ({
				url: `/user/favourites`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${AuthServiceTokens.getRefreshToken()}`
				}
			})
			// transformResponse: (res: unknown) => HelpRequestTypes.parse(res)
		}),

		removeFromFavourites: builder.mutation({
			invalidatesTags: ['favourites'],
			query: id => ({
				url: `/user/favourites/${id}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${AuthServiceTokens.getRefreshToken()}`
				}
			})
			// transformResponse: (res: unknown) => HelpRequestTypes.parse(res)
		}),

	})
})

export const {
	useGetAllCardsQuery,
	useGetHelpRequestByIdQuery,
	useAddToFavouriteMutation,
	useGetAllFavouritesQuery,
	useRemoveFromFavouritesMutation,
} = apiHelpRequests
