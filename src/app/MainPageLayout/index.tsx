import Header from '~/components/Header/Header.tsx'
import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer/Footer.tsx'
const MainPageLayout = () => {
	return (
		<div className={'wrapper'}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default MainPageLayout
