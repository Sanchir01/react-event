import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import { InputLoginType, LoginSchema } from '~/shared/types/Login.types'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

export const LoginForm = () => {
	useEffect(() => {
		document.title = 'Авторизация'
	}, [])
	const form = useForm<InputLoginType>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			login: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<InputLoginType> = data => {
		console.log(data)
		toast.success(data.login)
	}
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				border: '1px solid #E0E0E0',
				width: 'auto',
				height: '844px',
				padding: '40px '
			}}
		>
			<Typography variant='h4' component='h1'>
				Авторизация
			</Typography>
			<Box>
				<Typography variant='h5' component='h5'>
					Вход
				</Typography>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<Controller
						name='login'
						control={form.control}
						defaultValue=''
						rules={{ required: 'Name is required' }}
						render={({ field }) => (
							<TextField
								{...field}
								label='Логин'
								variant='outlined'
								fullWidth
								margin='normal'
								error={!!form.formState.errors.login}
								helperText={
									form.formState.errors.login
										? form.formState.errors.login.message
										: ''
								}
							/>
						)}
					/>
					<Controller
						name='password'
						control={form.control}
						defaultValue=''
						rules={{ required: 'Name is required' }}
						render={({ field }) => (
							<TextField
								{...field}
								label='Пароль'
								variant='outlined'
								fullWidth
								margin='normal'
								error={!!form.formState.errors.password}
								helperText={
									form.formState.errors.password
										? form.formState.errors.password.message
										: ''
								}
							/>
						)}
					/>
					<Button type='submit' variant='contained' sx={{ mt: '40px' }}>
						Войти
					</Button>
				</form>
			</Box>
		</Box>
	)
}
