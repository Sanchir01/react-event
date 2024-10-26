import '~/shared/styles/Footer.css'

const Footer = () => {
	return (
		<footer className='footerContainer'>
			<nav className='footerContent'>
				<a
					href='https://github.com/nat-davydova/charity_event_back_oct2024/tree/main'
					className='footerLink'
				>
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
				<a href='' className='footerLink'>
					Чат для друзей
				</a>
			</nav>
		</footer>
	)
}

export default Footer
