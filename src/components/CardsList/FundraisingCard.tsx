import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Box,
	Avatar,
	Divider,
	LinearProgress
} from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import DementiaImage from '~/shared/assets/Dementia.png'

interface FundraisingCardProps {
	title: string
	organizer: string
	location: string
	goal: string
	completionDate: string
	requestGoalCurrentValue: number
	requestGoal: number
	contributorsCount: number
}

const FundraisingCard: React.FC<FundraisingCardProps> = ({
	title,
	organizer,
	location,
	goal,
	completionDate,
	requestGoalCurrentValue,
	requestGoal,
	contributorsCount
}) => {
	return (
		<Card
			sx={{
				maxWidth: 304,
				borderRadius: 2,
				boxShadow: 3,
				height: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'column',
				padding: '16px'
			}}
		>
			<CardContent sx={{ padding: '0px' }}>
				<Box display='flex' justifyContent='center' mb={2}>
					<Avatar
						alt='Dementia'
						src={DementiaImage}
						sx={{ width: 220, height: 220 }}
					/>
				</Box>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					mb={2}
				>
					<Box
						display='flex'
						justifyContent='space-between'
						width='100% !important'
					>
						<Typography variant='h6' gutterBottom>
							{title}
						</Typography>
						<StarBorderIcon color='action' />
					</Box>
				</Box>

				<Typography variant='body2' color='textSecondary' gutterBottom>
					<strong>Организатор:</strong> {organizer}
				</Typography>
				<Typography variant='body2' color='textSecondary' gutterBottom>
					<strong>Локация:</strong> {location}
				</Typography>
				<Typography variant='body2' color='textSecondary' gutterBottom>
					<strong>Цель сбора:</strong> {goal}
				</Typography>
				<Typography variant='body2' color='textSecondary' gutterBottom>
					<strong>Завершение:</strong> {completionDate}
				</Typography>
				<Divider sx={{ my: 2 }} />

				<Typography variant='body2' color='textSecondary'>
					<strong>
						Мы собрали: {requestGoalCurrentValue} из {requestGoal} руб.
					</strong>
				</Typography>
				<LinearProgress
					variant='determinate'
					value={
						requestGoal <= 0
							? 100
							: Math.min(100, (100 * requestGoalCurrentValue) / requestGoal)
					}
					sx={{ mt: 1, mb: 2 }}
				/>
			</CardContent>
			<CardActions
				sx={{
					height: 92,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: 0,
					alignItems: 'flex-start'
				}}
			>
				<Typography variant='body2' color='textSecondary'>
					Нас уже: {contributorsCount}
				</Typography>
				<Button
					fullWidth
					variant='contained'
					color='primary'
					sx={{ marginBottom: '12px', marginLeft: '0px !important' }}
				>
					Помочь
				</Button>
			</CardActions>
		</Card>
	)
}

export default FundraisingCard
