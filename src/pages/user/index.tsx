import { useGetProfileQuery } from '~/app/store/api/profile'
import { useEffect } from 'react'
import { useGetAllFavouritesQuery } from '~/app/store/api/favourites'
import ProfileSection from '~/components/ProfileSection/ProfileSection'

export const UserProfilePage = () => {
	useEffect(() => {
		document.title = 'Профиль'
	}, [])
	const { data, isLoading, isSuccess } = useGetProfileQuery()
	const {
		data: favoritesData,
		isLoading: isLoadingFavorites,
		isSuccess: isSuccessFavorites
	} = useGetAllFavouritesQuery()
	console.log('profile', favoritesData)
	return (
		<>
			<div className=''>
				{isLoading ? <>loading</> : isSuccess ? <>{data.id}</> : <>error</>}
			</div>
			<div className=''>
				{isLoadingFavorites ? (
					<>loading</>
				) : isSuccessFavorites ? (
					<>test</>
				) : (
					<>error</>
				)}
			</div>
			<ProfileSection />
		</>
	)
}
