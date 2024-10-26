import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '~/components/Header/Header.tsx'
import Footer from '~/components/Footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
	<Header />
	<Footer />
	</StrictMode>
)
