import { AppBar, Toolbar, IconButton, Avatar } from '@mui/material'
import '../../shared/styles/Header.css'
import { Link } from 'react-router-dom'
import { AuthServiceTokens } from '~/shared/utils/token.service.ts'

const Header = () => {
	const token = AuthServiceTokens.getRefreshToken()
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
						<Link to={'/'} className='headerLink'>
							Запросы о помощи
						</Link>
						<Link to={token ? '/profile' : '/login'} className='profileLink'>
							<IconButton className='profileButton'>
								<Avatar className='profileAvatar' />
							</IconButton>
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
