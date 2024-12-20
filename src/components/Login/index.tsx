import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import { InputLoginType, LoginSchema } from '~/shared/types/Login.types'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useLoginMutation } from '~/app/store/api/login'
import st from '~/shared/styles/Login.module.scss'
import { AuthServiceTokens } from '~/shared/utils/token.service.ts'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
	useEffect(() => {
		document.title = 'Авторизация'
	}, [])

	const [mutate, { isError }] = useLoginMutation()
	const navigate = useNavigate()
	const form = useForm<InputLoginType>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			login: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<InputLoginType> = async data => {
		const res = await mutate({ login: data.login, password: data.password })
		if (res.data) {
			AuthServiceTokens.saveRefreshTokenToStorage(res.data.token)
		}
		if (isError) {
			toast.error('не получилось авторизоваться')
			return
		}
		navigate('/')
		form.reset()
	}
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
				Авторизация
			</Typography>
			<Box sx={{ mt: '90px' }}>
				<Typography variant='h5' component='h5'>
					Вход
				</Typography>
				<form className={st.login__form} onSubmit={form.handleSubmit(onSubmit)}>
					<div className={st.login__inputs}>
						<Controller
							name='login'
							control={form.control}
							defaultValue=''
							rules={{ required: 'Name is required' }}
							render={({ field }) => (
								<TextField
									{...field}
									onChange={e => form.setValue('login', e.target.value)}
									value={field.value}
									label='Логин'
									variant='outlined'
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
					</div>
					<Button
						type='submit'
						variant='contained'
						sx={{ mt: '40px', py: '8px', maxWidth: '485px', width: '100%' }}
					>
						Войти
					</Button>
				</form>
			</Box>
		</Box>
	)
}
