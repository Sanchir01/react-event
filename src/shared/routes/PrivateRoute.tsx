import { Navigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { RootState } from '~/app/store'

export const PrivateRoute = ({ element }: { element: JSX.Element }) => {
	const token = useSelector((state: RootState) => state.auth.token)
	return token ? element : <Navigate to='/login' />
}
