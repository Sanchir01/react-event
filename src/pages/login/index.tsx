import { Box, Container } from '@mui/material'
import { LoginForm } from '~/components/Login'
import { TestProfiles } from '~/components/TestProfilesList'
import { useLayoutEffect } from 'react'
import { AuthServiceTokens } from '~/shared/utils/token.service.ts'

const Login = () => {
	useLayoutEffect(() => {
		const token = AuthServiceTokens.getRefreshToken()
		if (token) {
			window.location.href = '/'
		}
	}, [])
	return (
		<Container maxWidth='xl'>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<LoginForm />
				<TestProfiles />
			</Box>
		</Container>
	)
}

export default Login
