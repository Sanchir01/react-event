import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiAuth } from '~/app/store/auth'
import { createLogger } from 'redux-logger'
const logger = createLogger({
	collapsed: true
})

const rootReducer = combineReducers({
	[apiAuth.reducerPath as string]: apiAuth.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiAuth.middleware).concat(logger)
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
