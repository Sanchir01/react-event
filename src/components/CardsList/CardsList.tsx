import React, { useEffect, useState } from 'react'
import { Container, Typography, Box, Grid, Pagination } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '~/app/store'
import FundraisingCard from './FundraisingCard'
import { useGetAllCardsQuery } from '~/shared/api/helpRequestsApi'
import { HelpRequest } from '~/shared/types'

const CardsList: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const cardsPerPage = 3
	const { token } = useSelector((state: RootState) => state.auth)
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
	}, [token, refetch])

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setCurrentPage(value)
	}

	const filteredCards =
		helpRequests?.filter(
			(request: HelpRequest) =>
				request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				request.organization.title
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
		) || []

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
			<Grid container spacing={3}>
				{currentCards.map((request: HelpRequest) => (
					<Grid item xs={12} sm={6} md={4} key={request.id}>
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
