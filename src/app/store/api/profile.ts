import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userSchema, UserType } from '~/shared/types/User.type.ts'
import { AuthServiceTokens } from '~/shared/utils/token.service.ts'

export const apiProfile = createApi({
	reducerPath: 'Profile',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_SERVER_URL
	}),
	tagTypes: ['Profile'],
	endpoints: builder => ({
		getProfile: builder.query<UserType, void>({
			providesTags: ['Profile'],
			query: () => ({
				url: '/user',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${AuthServiceTokens.getRefreshToken()}`
				}
			}),
			transformResponse: (res: unknown) => userSchema.parse(res)
		})
	})
})

export const { useGetProfileQuery } = apiProfile
