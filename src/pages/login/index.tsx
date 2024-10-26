import { Box, Container } from '@mui/material'
import { LoginForm } from '~/components/Login'
import { TestProfiles } from '~/components/TestProfiles'

const Login = () => {
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
