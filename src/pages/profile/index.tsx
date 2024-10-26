import { useGetProfileQuery } from '~/app/store/api/profile.ts'
import { useEffect } from 'react'

export const UserProfilePage = () => {
	useEffect(() => {
		document.title = 'Профиль'
	}, [])
	const { data, isLoading, isSuccess } = useGetProfileQuery()
	console.log('profile', data)
	return isLoading ? <>loading</> : isSuccess ? <>{data.id}</> : <>error</>
}
