import React, { useState } from 'react'
import { Container, Typography, Box, Grid, Pagination } from '@mui/material'
import FundraisingCard from './FundraisingCard'

const CardsList: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const cardsPerPage = 3
	const totalCards = 10

	// Генерация списка карточек
	const cards = Array.from({ length: totalCards }, (_, index) => index + 1)

	// Вычисление текущих карточек для отображения
	const indexOfLastCard = currentPage * cardsPerPage
	const indexOfFirstCard = indexOfLastCard - cardsPerPage
	const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

	// Обработка изменения страницы
	const handlePageChange = (
		_event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setCurrentPage(value)
	}

	return (
		<Container maxWidth='lg'>
			<Typography variant='h5' gutterBottom>
				Найдено: {totalCards}
			</Typography>
			<Grid container spacing={3}>
				{currentCards.map(item => (
					<Grid item xs={12} sm={6} md={4} key={item}>
						<FundraisingCard
							title={`Сбор средств для проекта ${item}`}
							organizer='Фонд помощи'
							location='Регион: Тестовый'
							goal='Цель сбора: Тестовая цель'
							completionDate='20.03.2025'
							collected='1 102 563 руб'
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
