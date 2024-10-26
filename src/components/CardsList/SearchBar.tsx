import { TextField, InputAdornment, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface SearchBarProps {
	value: string
	onChange: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value)
	}

	return (
		<>
			{' '}
			<Typography variant='h5' gutterBottom>
				Найти запрос
			</Typography>
			<TextField
				fullWidth
				placeholder='Введите название задачи или организации'
				variant='standard'
				value={value}
				onChange={handleInputChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon />
						</InputAdornment>
					)
				}}
				sx={{ mb: 2, fontSize: '1.25rem' }}
			/>
		</>
	)
}

export default SearchBar
