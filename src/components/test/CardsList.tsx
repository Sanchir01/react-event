import { Container, Typography, Box, Grid, Pagination } from '@mui/material'
import FundraisingCard from './FundraisingCard'

const CardsList: React.FC = () => {
	return (
		<Container maxWidth='lg'>
			<Typography variant='h5' gutterBottom>
				Найдено: 21
			</Typography>
			<Grid container spacing={3}>
				{[1, 2, 3].map(item => (
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
				<Pagination count={10} color='primary' />
			</Box>
		</Container>
	)
}

export default CardsList
