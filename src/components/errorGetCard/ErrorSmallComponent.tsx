import ErrorIcon from '@mui/icons-material/Error'
import { Typography } from '@mui/material'

const ErrorSmallComponent = () => {
	return (
		<Typography display={'flex'}>
			<ErrorIcon color={'error'} />
			Что-то пошло не так
		</Typography>
	)
}

export default ErrorSmallComponent
