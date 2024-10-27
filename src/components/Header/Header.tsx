import React, { useState } from 'react'
import {
	AppBar,
	Toolbar,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
	ListItemIcon
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import '../../shared/styles/Header.css'
import { AuthServiceTokens } from '~/shared/utils/token.service.ts'
import { Link, useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const navigate = useNavigate()
	const handleClose = () => {
		setAnchorEl(null)
		AuthServiceTokens.removerTokenFromStorage()
		navigate('/login')
	}
	const handleNavigateProifle = () => {
		setAnchorEl(null)
		navigate('/user')
	}

	const token = AuthServiceTokens.getRefreshToken()
	return (
		<div className='headerContainer'>
			<AppBar position='static' color='transparent' className='header'>
				<Toolbar className='toolbar'>
					<div className='logoContainer'>
						<img
							src='/src/shared/assets/images/_IconButton_.svg'
							alt='Logo'
							className='logoImage'
						/>
					</div>
					<div className='headerBlock'>
						<Link to='/' className='headerLink'>
							Запросы о помощи
						</Link>
						<IconButton onClick={handleAvatarClick} className='profileButton'>
							<Avatar className='profileAvatar' />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							transformOrigin={{ horizontal: 'right', vertical: 'top' }}
							anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
						>
							{token && (
								<MenuItem onClick={handleNavigateProifle}>
									<ListItemIcon>
										<AccountCircleIcon fontSize='small' />
									</ListItemIcon>
									Мой профиль
								</MenuItem>
							)}
							{token ? (
								<MenuItem onClick={handleClose}>
									<ListItemIcon>
										<LogoutIcon fontSize='small' />
									</ListItemIcon>
									Выйти
								</MenuItem>
							) : (
								<MenuItem onClick={handleClose}>
									<ListItemIcon>
										<LogoutIcon fontSize='small' />
									</ListItemIcon>
									Войти
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
