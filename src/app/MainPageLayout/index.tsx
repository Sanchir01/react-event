import Header from '~/components/Header/Header.tsx'
import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer/Footer.tsx'
const MainPageLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default MainPageLayout
