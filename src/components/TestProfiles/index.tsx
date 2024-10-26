import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { testUsers } from '~/shared/constants/testUsers'
import { UserCardTest } from '~/shared/ui/UserCardTest'

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
				<UserCardTest
					key={user.login}
					login={user.login}
					password={user.password}
					title={user.title}
				/>
			))}
		</Box>
	)
}
