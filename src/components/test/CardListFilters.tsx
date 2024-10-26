import './CardListFilters.css'
import {
	styled,
	Container,
	Typography,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Paper,
	Stack,
	TextField,
	InputAdornment,
	Button
} from '@mui/material'
import DateRangeIcon from '@mui/icons-material/DateRange';

import * as React from 'react'

export const CardListFilters: React.FC = () => {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: 'rgba(245, 245, 245, 1)',
		...theme.typography.body1,
		boxShadow: 'none',
		textAlign: 'left',
		noWrap: true,
		...theme.applyStyles('dark', {
			backgroundColor: '#1A2027'
		})
	}))
	return (
		<div>
			<Container
				className='cardListFilters'
				disableGutters
				sx={{ maxWidth: 320, bgcolor: 'background.paper', p: 2.5 }}
			>
				<Typography variant='h6'>Фильтрация</Typography>
				<Typography
					variant='body1'
					color='rgba(0, 0, 0, 0.6)'
					sx={{
						mt: 3
					}}
				>
					Кому мы помогаем
				</Typography>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox />}
						sx={{ ml: 0.25 }}
						label='Пенсионеры'
					/>
					<FormControlLabel
						control={<Checkbox />}
						sx={{ ml: 0.25 }}
						label='Дома престорелых'
					/>
				</FormGroup>
				<Typography color='rgba(0, 0, 0, 0.6)' sx={{ mt: 3 }}>
					Чем мы помогаем
				</Typography>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox />}
						sx={{ ml: 0.25 }}
						label='Вещи'
					/>
					<FormControlLabel
						control={<Checkbox />}
						sx={{ ml: 0.25 }}
						label='Финансирование'
					/>
				</FormGroup>
				<Accordion
					className='accordion-volunteering'
					disableGutters
					expanded
					sx={{
						boxShadow: 'none',
						boxSizing: 0
					}}
				>
					<AccordionSummary
						aria-controls='volunteering'
						id='volunteering'
						sx={{ border: 1, borderColor: 'rgba(0, 0, 0, 0.12)' }}
					>
						<Typography sx={{ ml: 3.5 }}>Волонтерство</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ backgroundColor: 'rgba(245, 245, 245, 1)' }}>
						<Stack spacing={2} sx={{ ml: 3.5 }}>
							<Item>
								<Typography color='rgba(0, 0, 0, 0.6)'>
									Специализация
								</Typography>
								<FormGroup>
									<FormControlLabel
										control={<Checkbox />}
										sx={{ ml: 0.25, mr: 0 }}
										label='Квалифицированная'
									/>
									<FormControlLabel
										control={<Checkbox />}
										sx={{ ml: 0.25, mr: 0 }}
										label='Не требует профессии'
									/>
								</FormGroup>
							</Item>
							<Item>
								<Typography color='rgba(0, 0, 0, 0.6)'>Формат</Typography>
								<FormGroup>
									<FormControlLabel
										control={<Checkbox />}
										sx={{ ml: 0.25, mr: 0 }}
										label='Онлайн'
									/>
									<FormControlLabel
										control={<Checkbox />}
										sx={{ ml: 0.25, mr: 0 }}
										label='Офлайн'
									/>
								</FormGroup>
							</Item>
							<Item>
								<Typography color='rgba(0, 0, 0, 0.6)'>
									Необходимо волонтеров
								</Typography>
								<FormGroup>
									<FormControlLabel
										control={<Checkbox />}
										sx={{ ml: 0.25, mr: 0 }}
										label='Группа'
									/>
									<FormControlLabel
										control={<Checkbox />}
										sx={{ ml: 0.25, mr: 0 }}
										label='Один'
									/>
								</FormGroup>
							</Item>
						</Stack>
					</AccordionDetails>
				</Accordion>
				<Typography color='rgba(0, 0, 0, 0.6)' sx={{ mt: 2.5 }}>
					Помощь актуальна до:
				</Typography>
				<TextField
					fullWidth
					id='date-of-relevance'
					label='Выберите дату'
					variant='outlined'
					size='small'
					sx={{ mt: 1.25, mb: 5 }}
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position='end'>
									<DateRangeIcon />
								</InputAdornment>
							)
						}
					}}
				/>
				<Button
					fullWidth
					variant='outlined'
					sx={{ color: 'black', borderColor: 'black', p: 1 }}
				>
					Сбросить
				</Button>
			</Container>
		</div>
	)
}
