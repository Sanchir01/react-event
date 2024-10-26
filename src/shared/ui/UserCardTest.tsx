import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { UserFieldsInfo } from '../assets/icons/UserFieldsInfo'
import { useLoginMutation } from '~/app/store/api/login'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const UserCardTest = ({
	title,
	login,
	password
}: {
	title: string
	login: string
	password: string
}) => {
	const [mutate] = useLoginMutation()
	const navigate = useNavigate()

	const loginTestUser = async () => {
		try {
			await mutate({ login, password })
			toast.success('Вы успешно авторизовались')
		} catch (e) {
			console.log(e)
			return
		}
		navigate('/')
	}
	return (
		<Box
			onClick={() => loginTestUser()}
			sx={{
				cursor: 'pointer',
				display: 'flex',
				flexDirection: 'column',
				gap: '30px',
				mt: '90px',
				maxWidth: '320px',
				width: '100%'
			}}
		>
			<Card
				sx={{ padding: '6px 16px', color: '', display: 'flex', gap: '12px' }}
			>
				<UserFieldsInfo />
				<Box>
					<Typography variant='h6' component='h2'>
						{title}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '2px'
						}}
					>
						<Typography variant='body1' component='span'>
							Логин: {login}
						</Typography>
						<Typography variant='body1' component='span'>
							Пароль: {password}
						</Typography>
					</Box>
				</Box>
			</Card>
		</Box>
	)
}
