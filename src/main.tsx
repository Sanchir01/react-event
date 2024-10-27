import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '~/components/Header/Header.tsx'
import Footer from '~/components/Footer/Footer.tsx'
import ProfileSection from './components/ProfileSection/ProfileSection.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
	<Header />
	<ProfileSection />
	<Footer />
	</StrictMode>
)
