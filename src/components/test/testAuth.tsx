import { useLoginMutation } from '~/shared/api/authApi'

const TestAuth: React.FC = () => {
	const [login, { data, error }] = useLoginMutation()

	const handleLogin = async () => {
		try {
			const authData = await login({
				login: 'testUser9@test.com',
				password: 'password9'
			}).unwrap()
			console.log(authData)
			console.log('Токен авторизации:', authData.token)
		} catch (err) {
			console.error('Ошибка авторизации:', err)
		}
	}

	return <button onClick={handleLogin}>Войти</button>
}

export default TestAuth
