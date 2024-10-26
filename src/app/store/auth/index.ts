import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiAuth = createApi({
	reducerPath: 'auth',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
	tagTypes: ['auth'],
	endpoints: builder => ({
		login: builder.mutation({
			query: data => ({
				body: data,
				method: 'POST',
				url: 'auth'
			})
		})
	})
})

export const { useLoginMutation } = apiAuth
