import { Card, CardContent, CardMedia, Typography } from '@mui/material'
export type GeneralInfoCardType = {
	imgUrl: string
	text: string
	dimensions: {
		width: number
		height: number
	}
	color: string
}
const GeneralInfoCard = ({
	imgUrl,
	text,
	dimensions,
	color
}: GeneralInfoCardType) => {
	return (
		<Card
			fullWidth
			sx={{
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<CardContent>
				<CardMedia
					sx={{ width: dimensions.width, height: dimensions.height }}
					image={imgUrl}
				/>
				<Typography
					className={'error__text'}
					variant='h5'
					component='div'
					textAlign={'center'}
					color={color}
				>
					{text}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default GeneralInfoCard
