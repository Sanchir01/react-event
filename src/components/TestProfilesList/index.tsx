import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { testUsers } from '~/shared/constants/testUsers'
import { Index } from '~/components/TestProfile'

export const TestProfiles = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				border: '1px solid #E0E0E0',
				width: '750px',
				height: '844px',
				pl: '40px ',
				pt: '64px'
			}}
		>
			<Typography variant='h4' component='h1'>
				Тестовые пользователи
			</Typography>
			{testUsers.map(user => (
				<Index
					key={user.login}
					login={user.login}
					password={user.password}
					title={user.title}
				/>
			))}
		</Box>
	)
}
