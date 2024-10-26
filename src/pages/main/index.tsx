import { useState } from 'react'
import CardsList from '~/components/CardsList/CardsList'
import SearchBar from '~/components/CardsList/SearchBar'

function App() {
	const [searchTerm, setSearchTerm] = useState('')

	const handleSearchChange = (value: string) => {
		setSearchTerm(value)
	}
	return (
		<>
			<SearchBar value={searchTerm} onChange={handleSearchChange} />
			<CardsList searchTerm={searchTerm} />
		</>
	)
}

export default App
