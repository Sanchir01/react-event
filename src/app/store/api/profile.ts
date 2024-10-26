import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiProfile = createApi({
	reducerPath: 'Profile',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
	endpoints: builder => ({
		getProfile: builder.query({
			query: () => ({
				url: '/user',
				credentials: 'include',
				method: 'GET'
			})
		})
	})
})

export const { useGetProfileQuery } = apiProfile
