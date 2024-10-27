import { Box, Grid2, Typography } from '@mui/material'
import { RenderDate } from '~/components/Data/RenderData.tsx'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import HelpRequestCard from '~/components/CardsList/HelpRequestCard.tsx'

const HelpRequestPage = () => {
	return (
		<Grid2 container sx={{ backgroundColor: '#F5F5F5', pl: 4 }}>
			<Grid2
				component={'div'}
				size={12}
				sx={{ backgroundColor: '#F5F5F5', mb: 3, mt: 3 }}
			>
				<Typography variant={'h4'}>Запрос о помощи</Typography>
			</Grid2>
			<Grid2 component={'div'} size={12} container>
				<Grid2
					component={'div'}
					id={'main-content'}
					size={9}
					container
					sx={{ backgroundColor: '#FFFFFF', pl: 3.6 }}
				>
					<Grid2
						component={'div'}
						size={6}
						sx={{ ml: 2, mt: 4, mb: 6.4, pr: 3.6 }}
					>
						<RenderDate />
					</Grid2>
					<Grid2
						component={'div'}
						size={5}
						display={'flex'}
						justifyContent={'end'}
					>
						<Box
							sx={{
								borderRadius: '4px',
								padding: '4px 10px',
								border: 'solid',
								borderWidth: '1px',
								mt: 4,
								height: '28px',
								alignItems: 'center'
							}}
							display={'flex'}
						>
							<StarBorderIcon />
							<Typography sx={{ ml: 1 }}>В избранное</Typography>
						</Box>
					</Grid2>
				</Grid2>
				<Grid2 container component={'div'} id={'additional-content'} size={3}>
					<Box height={'470px'}>
						<HelpRequestCard
							title={
								<Typography variant={'h6'}>Вместе для добрых дел</Typography>
							}
							goal={
								'Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на зимний сезон. Пополнить запасы лекарств на три месяца. Обеспечить уход на дому в течении полугода.'
							}
							collected={'1 102 563 руб'}
							collectedGoal={'2 102 563 руб'}
							completionDate={'20.03.2025'}
						/>
					</Box>
				</Grid2>
			</Grid2>
		</Grid2>
	)
}
export type HelpRequestCardType = {
	title: React.ReactNode
	goal: string
	collected: string
	collectedGoal: string
	completionDate: string
}
export default HelpRequestPage
