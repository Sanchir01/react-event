import { useNavigate } from 'react-router-dom'
import { AuthServiceTokens } from '~/shared/utils/token.service.ts'
import React, { useEffect } from 'react'

export const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
	const token = AuthServiceTokens.getRefreshToken()
	const navigate = useNavigate()
	useEffect(() => {
		if (token === undefined) {
			navigate('/login')
		}
	}, [])
	return token ? element : <></>
}
