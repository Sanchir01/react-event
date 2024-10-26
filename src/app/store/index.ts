import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiAuth } from '~/app/store/api/login'
import { createLogger } from 'redux-logger'
import { apiProfile } from './api/profile'
import { apiHelpRequests } from '~/app/store/api/helpRequestsApi'

const logger = createLogger({
	collapsed: true
})

const rootReducer = combineReducers({
	[apiAuth.reducerPath]: apiAuth.reducer,
	[apiProfile.reducerPath]: apiProfile.reducer,
	[apiHelpRequests.reducerPath]: apiHelpRequests.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(apiAuth.middleware)
			.concat(apiProfile.middleware)
			.concat(apiHelpRequests.middleware)
			.concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
