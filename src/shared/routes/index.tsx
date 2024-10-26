import { createBrowserRouter } from 'react-router-dom'
import Main from '~/pages/main'
import TestPage from '~/pages/test'
import Login from '~/pages/login'
import MainPageLayout from '~/app/MainPageLayout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPageLayout />,
		children: [
			{
				index: true,
				element: <Main />
			}
		]
	},
	{
		path: '/test',
		element: <TestPage />
	},
	{
		path: '/login',
		element: <Login />
	}
])
