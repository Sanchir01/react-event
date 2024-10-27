import { Box, Grid2, Stack, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export const RenderDate = () => {
	return (
		<>
			<Typography variant={'h5'} sx={{ mb: 3, opacity: '87%' }}>
				Сбор средств для пенсионерки Ангелины Ивановны{' '}
			</Typography>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					Организация
				</Typography>
				<Typography variant={'body2'}>
					Фонд помощи для ветеранов и инвалидов "Вера"
				</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<VerifiedIcon color={'info'} style={{ fontSize: '20px' }} />
					<Typography
						variant={'caption'}
						sx={{
							ml: 0.5,
							display: 'flex',
							alignItems: 'center'
						}}
					>
						Организация проверена
					</Typography>
				</Box>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					Кому мы помогаем
				</Typography>
				<Typography variant={'body2'}>
					Мы помогаем пенсионерке Ангелине Инвановне. Ей 82 года, и, к
					сожалению, её здоровье в последние годы значительно ухудшилось. Она
					страдает от нескольких хронических заболеваний, таких как диабет и
					гипертония, и нуждается в постоянном лечении и уходе. Бабушка всю
					жизнь работала на заводе, воспитывала детей и помогала внукам, но
					сейчас, когда она вышла на пенсию, её маленькая пенсия не покрывает
					даже основных расходов на лекарства. Каждый месяц она тратит
					значительную часть своей пенсии на медикаменты, которые необходимы для
					поддержания её здоровья. К сожалению, многие препараты являются
					довольно дорогими, и бабушка часто вынуждена экономить, отказываясь от
					необходимых лекарств. Кроме того, Ангелина Инвановна нуждается в уходе
					на дому. Из-за слабости и проблем с передвижением ей трудно
					справляться с повседневными делами.
				</Typography>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					Цель сбора
				</Typography>
				<Typography variant={'body2'}>
					Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на зимний
					сезон. Пополнить запасы лекарств на три месяца. Обеспечить уход на
					дому в течении полугода.
				</Typography>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					План действий
				</Typography>

				<Stack gap={1}>
					<Typography display={'flex'} alignItems={'center'} variant='body2'>
						<CheckCircleOutlineIcon color={'disabled'} sx={{ mr: 0.5 }} />
						Оплатить лечение МКБ в клинике “Здоровье”
					</Typography>
					<Typography display={'flex'} alignItems={'center'} variant='body2'>
						<CheckCircleOutlineIcon color={'disabled'} sx={{ mr: 0.5 }} />{' '}
						Провести диагностику онкологических заболеваний
					</Typography>
					<Typography display={'flex'} alignItems={'center'} variant='body2'>
						{' '}
						<CheckCircleOutlineIcon color={'disabled'} sx={{ mr: 0.5 }} />
						Купить одежду на зимний сезон
					</Typography>
					<Typography display={'flex'} alignItems={'center'} variant='body2'>
						{' '}
						<CheckCircleOutlineIcon color={'success'} sx={{ mr: 0.5 }} />
						Обеспечить уход на дому в течении полугода
					</Typography>
					<Typography display={'flex'} alignItems={'center'} variant='body2'>
						{' '}
						<CheckCircleOutlineIcon color={'success'} sx={{ mr: 0.5 }} />
						Восполнить необходимые лекарства
					</Typography>
				</Stack>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					Завершение
				</Typography>
				<Typography variant={'body2'}>20.02 2023</Typography>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					Локация
				</Typography>

				<Box display={'flex'}>
					<Typography variant={'subtitle2'} sx={{ fontWeight: '600' }}>
						{' '}
						Область:
					</Typography>
					<Typography variant={'body2'} sx={{ pl: 0.5 }}>
						{' '}
						Владимирская{' '}
					</Typography>
				</Box>
				<Box display={'flex'}>
					<Typography variant={'subtitle2'} sx={{ fontWeight: '600' }}>
						{' '}
						Насленный пункт:
					</Typography>
					<Typography variant={'body2'} sx={{ pl: 0.5 }}>
						{' '}
						Владимир{' '}
					</Typography>
				</Box>
			</Box>
			<Grid2 container>
				<Grid2 component={'div'} size={12}>
					<Typography variant={'h6'} sx={{ mb: 1 }}>
						Контакты
					</Typography>
				</Grid2>
				<Grid2 component={'div'} size={12} container>
					<Grid2 component={'div'} size={4}>
						<Typography variant={'subtitle2'} sx={{ fontWeight: '600' }}>
							{' '}
							Телефон
						</Typography>
						<Typography variant={'body2'}> + 7 999 888 99 50</Typography>
					</Grid2>
					<Grid2 component={'div'} size={4}>
						<Typography variant={'subtitle2'} sx={{ fontWeight: '600' }}>
							E-mail
						</Typography>
						<Typography variant={'body2'}> forExample2@yandex.ru</Typography>
					</Grid2>
					<Grid2 component={'div'} size={4}>
						<Typography variant={'subtitle2'} sx={{ fontWeight: '600' }}>
							Сайт
						</Typography>
						<Typography variant={'body2'}> forexamplehelp.ru</Typography>
					</Grid2>
				</Grid2>
			</Grid2>
		</>
	)
}
