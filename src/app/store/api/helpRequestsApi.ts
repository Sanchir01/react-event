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
		})
	})
})

export const { useGetAllCardsQuery, useGetHelpRequestByIdQuery } =
	apiHelpRequests
