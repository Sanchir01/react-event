import { Box, Grid2, Stack, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import {displayDate} from "~/shared/utils/dateUtils.tsx";

export const RenderData = ({data}) => {
	debugger
	return (
		<>
			<Typography variant={'h5'} sx={{ mb: 3, opacity: '87%' }}>
				{data?.title?.replace(/^\[\d+\]\s*/, '')}
			</Typography>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					Организация
				</Typography>
				<Typography variant={'body2'}>
					{data.organization.title}
				</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<VerifiedIcon color={data.organization.isVerified ? 'info' : 'disabled'} style={{ fontSize: '20px' }} />
					<Typography
						variant={'caption'}
						sx={{
							ml: 0.5,
							display: 'flex',
							alignItems: 'center'
						}}
					>
						{data.organization.isVerified ? 'Организация проверена' : 'Организация не проверена'}
					</Typography>
				</Box>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					Кому мы помогаем
				</Typography>
				<Typography variant={'body2'}>
					{data.description}
				</Typography>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					Цель сбора
				</Typography>
				<Typography variant={'body2'}>
					{data.goalDescription}
				</Typography>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					План действий
				</Typography>

				<Stack gap={1}>
					{data.actionsSchedule.map(actionItem => {
						return <Typography display={'flex'} alignItems={'center'} variant='body2'>
							<CheckCircleOutlineIcon color={actionItem.isDone ? "success" : 'disabled'} sx={{ mr: 0.5 }} />
							{actionItem.stepLabel}
						</Typography>
					})}
				</Stack>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					Завершение
				</Typography>
				<Typography variant={'body2'}>{displayDate(data.endingDate)}</Typography>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant={'h6'} sx={{ mb: 1 }}>
					Локация
				</Typography>

				<Box display={'flex'}>
					<Typography variant={'subtitle2'} sx={{ fontWeight: '600' }}>
						Область:
					</Typography>
					<Typography variant={'body2'} sx={{ pl: 0.5 }}>
						{data.location.district}
					</Typography>
				</Box>
				<Box display={'flex'}>
					<Typography variant={'subtitle2'} sx={{ fontWeight: '600' }}>
						Насленный пункт:
					</Typography>
					<Typography variant={'body2'} sx={{ pl: 0.5 }}>
						{data.location.city}
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
							Телефон
						</Typography>
						<Typography variant={'body2'}>{data.contacts.phone}</Typography>
					</Grid2>
					<Grid2 component={'div'} size={4}>
						<Typography variant={'subtitle2'} sx={{ fontWeight: '600' }}>
							E-mail
						</Typography>
						<Typography variant={'body2'}> {data.contacts.email}</Typography>
					</Grid2>
					<Grid2 component={'div'} size={4}>
						<Typography variant={'subtitle2'} sx={{ fontWeight: '600' }}>
							Сайт
						</Typography>
						<Typography variant={'body2'}> {data.contacts.website}</Typography>
					</Grid2>
				</Grid2>
			</Grid2>
		</>
	)
}
