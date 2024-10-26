import { createBrowserRouter } from 'react-router-dom'
import Main from '~/pages/main'
import Login from '~/pages/login'
import MainPageLayout from '~/app/MainPageLayout'
import { UserProfilePage } from '~/pages/profile'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPageLayout />,
		children: [
			{
				index: true,
				element: <Main />
			},
			{
				path: 'profile',
				element: <UserProfilePage />
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	}
])
