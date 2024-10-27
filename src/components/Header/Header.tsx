import {
	AppBar,
	Toolbar,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
	ListItemIcon
} from '@mui/material'
import '../../shared/styles/Header.css'
import { Link } from 'react-router-dom'
import { AuthServiceTokens } from '~/shared/utils/token.service.ts'
import { SetStateAction, useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'

const Header = ({ onLogout }) => {
	const [anchorEl, setAnchorEl] = useState(null)

	const token = AuthServiceTokens.getRefreshToken()
	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	const handleMenuOpen = (event: { currentTarget: SetStateAction<null> }) => {
		setAnchorEl(event.currentTarget)
	}

	const handleLogout = () => {
		handleMenuClose()
		onLogout()
	}
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
						<IconButton
							sx={{ padding: '0 !important' }}
							onClick={handleMenuOpen}
						>
							<Avatar className='profileAvatar' />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							open={open}
							onClose={handleMenuClose}
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
							transformOrigin={{ vertical: 'top', horizontal: 'right' }}
						>
							{token ? (
								<>
									<MenuItem
										component={Link}
										to='/profile'
										onClick={handleMenuClose}
									>
										<ListItemIcon>
											<AccountCircle fontSize='small' />
										</ListItemIcon>
										<Typography variant='inherit'>Мой профиль</Typography>
									</MenuItem>
									<MenuItem onClick={handleLogout}>
										<ListItemIcon>
											<Logout fontSize='small' />
										</ListItemIcon>
										<Typography variant='inherit'>Выйти</Typography>
									</MenuItem>
								</>
							) : (
								<MenuItem
									component={Link}
									to='/login'
									onClick={handleMenuClose}
								>
									<Typography variant='inherit'>Войти</Typography>
								</MenuItem>
							)}
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
