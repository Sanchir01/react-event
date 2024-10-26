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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import DementiaImage from '~/shared/assets/Dementia.png'

interface FundraisingCardProps {
	title: string
	organizer: string
	location: string
	goal: string
	completionDate: string
	collected: string
}

const FundraisingCard: React.FC<FundraisingCardProps> = ({
	title,
	organizer,
	location,
	goal,
	completionDate,
	collected
}) => {
	return (
		<Card sx={{ maxWidth: 320, borderRadius: 2, boxShadow: 3 }}>
			<CardContent>
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
					{' '}
					<Typography variant='h6' gutterBottom>
						{title}
					</Typography>
					<FavoriteBorderIcon color='action' />
				</Box>

				<Typography variant='body2' color='textSecondary' gutterBottom>
					<strong>Организатор:</strong> {organizer}
				</Typography>
				<Typography variant='body2' color='textSecondary'>
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
					<strong>Мы собрали:</strong> {collected}
				</Typography>
				<LinearProgress
					variant='determinate'
					value={60}
					sx={{ mt: 1, mb: 2 }}
				/>
				<Typography variant='body2' color='textSecondary'>
					Нас уже: 3 566 987
				</Typography>
			</CardContent>
			<CardActions>
				<Button fullWidth variant='contained' color='primary'>
					Помочь
				</Button>
			</CardActions>
		</Card>
	)
}

export default FundraisingCard
