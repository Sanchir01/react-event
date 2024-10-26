import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ILoginResponse, InputLoginType } from '~/shared/types/Login.types.ts'

export const apiAuth = createApi({
	reducerPath: 'Auth',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
	endpoints: builder => ({
		login: builder.mutation<ILoginResponse, InputLoginType>({
			query: data => ({
				body: data,
				method: 'POST',
				url: 'auth'
			})
		})
	})
})

export const { useLoginMutation } = apiAuth
