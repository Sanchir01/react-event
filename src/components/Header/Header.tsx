import { AppBar, Toolbar, IconButton, Avatar } from '@mui/material'
import '../../shared/styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className='headerContainer'>
			<AppBar position='static' color='transparent' className='header'>
				<Toolbar className='toolbar'>
					<Link to={'/'} className='logoContainer'>
						<img
							src='/src/shared/assets/images/_IconButton_.svg'
							alt='Logo'
							className='logoImage'
						/>
					</Link>
					<div className='headerBlock'>
						<a href='#' className='headerLink'>
							Запросы о помощи
						</a>
						<a href='#' className='profileLink'>
							<IconButton className='profileButton'>
								<Avatar className='profileAvatar' />
							</IconButton>
						</a>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
