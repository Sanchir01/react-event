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
import {useNavigate} from "react-router-dom";

interface FundraisingCardProps {
	title: string
	organizer: string
	location: string
	goal: string
	completionDate: string
	collected: string
	contributorsCount: number
	id: string
}

const FundraisingCard: React.FC<FundraisingCardProps> = ({
	title,
	organizer,
	location,
	goal,
	completionDate,
	collected,
	contributorsCount,
	id
}) => {

	const navigate = useNavigate();

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
			</CardContent>
			<CardActions
				sx={{
					height: 92,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: 0
				}}
			>
				<Typography variant='body2' color='textSecondary'>
					Нас уже: {contributorsCount}
				</Typography>
				<Button
					fullWidth
					variant='contained'
					color='primary'
					sx={{ marginBottom: '12px' }}
					onClick={() => {
						navigate(`/request/${id}`)
					}}
				>
					Помочь
				</Button>
			</CardActions>
		</Card>
	)
}

export default FundraisingCard
