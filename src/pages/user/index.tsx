import { useGetProfileQuery } from '~/app/store/api/profile.ts'
import { useEffect } from 'react'
import { useGetAllFavoritesQuery } from '~/app/store/api/favorites.ts'
import ProfileSection from '~/components/ProfileSection/ProfileSection.tsx'

export const UserProfilePage = () => {
	useEffect(() => {
		document.title = 'Профиль'
	}, [])
	const { data, isLoading, isSuccess } = useGetProfileQuery()
	const {
		data: favoritesData,
		isLoading: isLoadingFavorites,
		isSuccess: isSuccessFavorites
	} = useGetAllFavoritesQuery()
	console.log('profile', favoritesData)
	console.log(data)
	return (
		<>
			<div>
				{isLoading ? (
					<>loading</>
				) : isSuccess ? (
					<>
						<ProfileSection userData={data} />
					</>
				) : (
					<>error</>
				)}
			</div>
			<div>
				{isLoadingFavorites ? (
					<>loading</>
				) : isSuccessFavorites ? (
					<>test</>
				) : (
					<>error</>
				)}
			</div>
		</>
	)
}
