import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '~/shared/types/User.type.ts'
import { AuthServiceTokens } from '~/shared/utils/token.service.ts'

export const apiProfile = createApi({
	reducerPath: 'Profile',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_SERVER_URL
	}),
	endpoints: builder => ({
		getProfile: builder.query<UserType, void>({
			query: () => ({
				url: '/user',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${AuthServiceTokens.getRefreshToken()}`
				}
			})
		})
	})
})

export const { useGetProfileQuery } = apiProfile
