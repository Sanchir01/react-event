import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setToken } from './authSlice'
import { RootState } from '~/app/store'

interface AuthResponse {
	token: string
}

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4040',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			headers.set('Content-Type', 'application/json')
			return headers
		}
	}),
	endpoints: builder => ({
		login: builder.mutation<AuthResponse, { login: string; password: string }>({
			query: credentials => ({
				url: '/api/auth',
				method: 'POST',
				body: credentials
			}),
			async onQueryStarted({ login, password }, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					dispatch(setToken(data.token))
				} catch (err) {
					console.error('Ошибка авторизации:', err)
				}
			}
		})
	})
})

export const { useLoginMutation } = authApi
