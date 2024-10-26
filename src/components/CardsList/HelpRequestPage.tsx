import React, { useState } from 'react'
import { Button, Grid, Container, Typography } from '@mui/material'
import FundraisingCard from './FundraisingCard'
import { useGetHelpRequestsQuery } from '~/shared/api/helpRequestsApi'

const HelpRequestsPage: React.FC = () => {
	const [showRequests, setShowRequests] = useState(false)
	const {
		data: helpRequests,
		error,
		isLoading
	} = useGetHelpRequestsQuery(undefined, {
		skip: !showRequests
	})

	const handleShowRequests = () => {
		setShowRequests(true)
	}

	return (
		<Container maxWidth='lg'>
			<Typography variant='h4' gutterBottom>
				Запросы о помощи
			</Typography>
			<Button variant='contained' color='primary' onClick={handleShowRequests}>
				Показать запросы
			</Button>

			{isLoading && (
				<Typography variant='body1' color='textSecondary' mt={2}>
					Загрузка...
				</Typography>
			)}
			{error && (
				<Typography variant='body1' color='error' mt={2}>
					Ошибка при загрузке данных
				</Typography>
			)}

			{helpRequests && (
				<Grid container spacing={3} mt={2}>
					{helpRequests.map(request => (
						<Grid item xs={12} sm={6} md={4} key={request.id}>
							<FundraisingCard
								title={request.title}
								organizer={request.organization.title}
								location={`Город: ${request.location.city}`}
								goal={request.goalDescription}
								completionDate={request.endingDate}
								collected={`${request.requestGoalCurrentValue} из ${request.requestGoal} руб`}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</Container>
	)
}

export default HelpRequestsPage
