import { CardListFilters } from '~/components/test/CardListFilters'
import CardsList from '~/components/CardsList/CardsList.tsx'
import { Box } from '@mui/material'

function App() {
	return (
		<Box sx={{ display: 'flex' }} style={{ backgroundColor: 'gray' }}>
			<CardListFilters />
			<Box>
				<CardsList />
			</Box>
		</Box>
	)
}

export default App
