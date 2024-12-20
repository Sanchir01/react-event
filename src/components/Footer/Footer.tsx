import '~/shared/styles/Footer.css'

const Footer = () => {
	return (
		<footer className='footerContainer'>
			<nav className='footerContent'>
				<a href='https://t.me/natti_jun_front/239' className='footerLink'>
					Об ивенте
				</a>
				<a
					href='https://github.com/Sanchir01/react-event'
					target='_blank'
					rel='noopener noreferrer'
					className='footerLink'
				>
					Github проекта
				</a>
				<a href='https://t.me/pixels_and_feather' className='footerLink'>
					Чат для друзей
				</a>
			</nav>
		</footer>
	)
}

export default Footer
