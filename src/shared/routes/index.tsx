import { createBrowserRouter } from 'react-router-dom'
import Main from '~/pages/main'
import TestPage from '~/pages/test'
import Login from '~/pages/login'
import MainPageLayout from '~/app/MainPageLayout'
import { PrivateRoute } from './PrivateRoute'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPageLayout />,
		children: [
			{
				index: true,
				element: <PrivateRoute element={<Main />} />
			}
		]
	},
	{
		path: '/test',
		element: <PrivateRoute element={<TestPage />} />
	},
	{
		path: '/login',
		element: <MainPageLayout />,
		children: [
			{
				index: true,
				element: <Login />
			}
		]
	}
])
