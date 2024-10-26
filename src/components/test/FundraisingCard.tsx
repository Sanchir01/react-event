import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button
} from '@mui/material'

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
		<Card>
			<CardContent>
				<Typography variant='h6' gutterBottom>
					{title}
				</Typography>
				<Typography variant='body2'>
					<strong>Организатор:</strong> {organizer}
				</Typography>
				<Typography variant='body2'>
					<strong>Локация:</strong> {location}
				</Typography>
				<Typography variant='body2'>
					<strong>Цель сбора:</strong> {goal}
				</Typography>
				<Typography variant='body2'>
					<strong>Завершение:</strong> {completionDate}
				</Typography>
				<Typography variant='body2'>
					<strong>Мы собрали:</strong> {collected}
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant='contained' color='primary'>
					Помочь
				</Button>
			</CardActions>
		</Card>
	)
}

export default FundraisingCard
