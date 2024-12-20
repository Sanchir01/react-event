import { createBrowserRouter } from 'react-router-dom'
import Main from '~/pages/main'
import Login from '~/pages/login'
import MainPageLayout from '~/app/MainPageLayout'
import { UserProfilePage } from '~/pages/user'

import HelpRequestPage from '~/pages/onerequers'
import { PrivateRoute } from '~/shared/routes/PrivateRoute.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPageLayout />,
		children: [
			{
				index: true,
				element: <PrivateRoute element={<Main />} />
			},
			{
				path: '/user',
				element: <PrivateRoute element={<UserProfilePage />} />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/request/:id',
				element: <PrivateRoute element={<HelpRequestPage />} />
			}
		]
	}
])
