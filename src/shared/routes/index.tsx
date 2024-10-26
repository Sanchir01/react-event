import { createBrowserRouter } from 'react-router-dom'
import Main from '~/pages/main'
import TestPage from '~/pages/test'
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
	}
])
