import { createBrowserRouter } from 'react-router-dom'
import Main from '~/pages/main'
import Login from '~/pages/login'
import MainPageLayout from '~/app/MainPageLayout'
import { UserProfilePage } from '~/pages/profile'

import HelpRequestPage from '~/pages/onerequers'
import { store } from '~/app/store'
import { apiProfile } from '~/app/store/api/profile.ts'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPageLayout />,
		children: [
			{
				index: true,
				element: <Main />,
				loader: async () => {}
			},
			{
				path: 'profile',
				element: <UserProfilePage />,

				loader: async () => {
					await store.dispatch(
						apiProfile.util.prefetch('getProfile', undefined, {})
					)
					return null
				}
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/request',
				element: <HelpRequestPage />
			}
		]
	}
])
