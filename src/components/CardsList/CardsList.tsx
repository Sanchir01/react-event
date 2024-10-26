import React, { useEffect, useState } from 'react'
import { Container, Typography, Box, Grid, Pagination } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '~/app/store'
import FundraisingCard from './FundraisingCard'
import { useGetAllCardsQuery } from '~/shared/api/helpRequestsApi'
import { HelpRequest } from '~/shared/types'
import { FilterCriteria } from '~/shared/types'

const CardsList: React.FC<{ searchTerm: string; filters: FilterCriteria }> = ({
	searchTerm,
	filters
}) => {
	const [currentPage, setCurrentPage] = useState(1)
	const cardsPerPage = 3
	const token = useSelector((state: RootState) => state.auth.token)
	const {
		data: helpRequests,
		isLoading,
		isError,
		refetch
	} = useGetAllCardsQuery(undefined, {
		skip: !token
	})

	useEffect(() => {
		if (token) {
			refetch()
		}
		console.log(helpRequests)
	}, [token, refetch, helpRequests])

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setCurrentPage(value)
	}

	const filteredCards =
		helpRequests?.filter((request: HelpRequest) => {
			const matchesSearchTerm =
				request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				request.organization.title
					.toLowerCase()
					.includes(searchTerm.toLowerCase())

			const matchesFilters = Object.entries(filters).every(([key, value]) => {
				if (Array.isArray(value) && value.length > 0) {
					switch (key) {
						case 'categories':
							// Фильтрация по типам помощи: Пенсионеры, Дома престарелых, Вещи, Финансирование
							return (
								(value.includes('Пенсионеры') &&
									request.requesterType === 'person') ||
								(value.includes('Дома престарелых') &&
									request.requesterType === 'organization') ||
								(value.includes('Вещи') && request.helpType === 'material') ||
								(value.includes('Финансирование') &&
									request.helpType === 'finance')
							)
						case 'specialization':
							return (
								(value.includes('Квалифицированная') &&
									request.helperRequirements.qualification ===
										'professional') ||
								(value.includes('Не требует профессии') &&
									request.helperRequirements.qualification === 'common')
							)
						case 'format':
							return (
								(value.includes('Онлайн') &&
									request.helperRequirements.isOnline) ||
								(value.includes('Офлайн') &&
									!request.helperRequirements.isOnline)
							)
						case 'volunteerType':
							return (
								(value.includes('Группа') &&
									request.helperRequirements.helperType === 'group') ||
								(value.includes('Один') &&
									request.helperRequirements.helperType === 'single')
							)
						default:
							return true
					}
				}
				if (typeof value === 'string' && key === 'date') {
					return new Date(request.endingDate) <= new Date(value)
				}
				return true
			})

			return matchesSearchTerm && matchesFilters
		}) || []

	if (!token) {
		return (
			<Container maxWidth='lg'>
				<Typography variant='h5' gutterBottom>
					Пожалуйста, авторизуйтесь, чтобы просмотреть запросы о помощи.
				</Typography>
			</Container>
		)
	}

	if (isLoading) {
		return (
			<Container maxWidth='lg'>
				<Typography variant='h5' gutterBottom>
					Загрузка запросов о помощи...
				</Typography>
			</Container>
		)
	}

	if (isError) {
		return (
			<Container maxWidth='lg'>
				<Typography variant='h5' gutterBottom color='error'>
					Ошибка при загрузке запросов о помощи.
				</Typography>
			</Container>
		)
	}

	const totalCards = filteredCards.length
	const indexOfLastCard = currentPage * cardsPerPage
	const indexOfFirstCard = indexOfLastCard - cardsPerPage
	const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard)

	return (
		<Container maxWidth='lg'>
			<Typography variant='h5' gutterBottom>
				Найдено: {totalCards}
			</Typography>
			<Grid container spacing={3} sx={{ minHeight: '60vh' }}>
				{currentCards.map((request: HelpRequest) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={request.id}
						sx={{ display: 'flex' }}
					>
						<FundraisingCard
							title={request.title}
							organizer={request.organization.title}
							location={`Город: ${request.location.city}`}
							goal={request.goalDescription}
							completionDate={request.endingDate}
							collected={`${request.requestGoalCurrentValue} из ${request.requestGoal} руб`}
							contributorsCount={request.contributorsCount}
						/>
					</Grid>
				))}
			</Grid>
			<Box mt={4} display='flex' justifyContent='center'>
				<Pagination
					count={Math.ceil(totalCards / cardsPerPage)}
					page={currentPage}
					onChange={handlePageChange}
					color='primary'
				/>
			</Box>
		</Container>
	)
}

export default CardsList
