import { Navigate } from 'react-router-dom'
import { AuthServiceTokens } from '~/shared/utils/token.service.ts'
import React from 'react'

export const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
	const token = AuthServiceTokens.getRefreshToken()
	return token ? element : <Navigate to='/login' />
}
