import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '~/shared/api/authApi'
import { helpRequestsApi } from '~/shared/api/helpRequestsApi'
import { authReducer } from '~/shared/api/authSlice'

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[helpRequestsApi.reducerPath]: helpRequestsApi.reducer,
		auth: authReducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			authApi.middleware,
			helpRequestsApi.middleware
		),
	devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
