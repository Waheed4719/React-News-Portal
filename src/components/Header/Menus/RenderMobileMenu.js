import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

function renderMobileMenu ({
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose
}) {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
          width: '100%',
          height: '100%'
        }}
        to='/sign-in'
      >
        <MenuItem component={'a'} href='/sign-in'>
          <IconButton
            size='large'
            aria-label='show 4 new mails'
            color='inherit'
          >
            <MailOutlinedIcon />
          </IconButton>
          <p>Sign in</p>
        </MenuItem>
      </Link>
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
          width: '100%',
          height: '100%'
        }}
        to='/sign-up'
      >
        <MenuItem component={'a'} href='/sign-up'>
          <IconButton
            size='large'
            aria-label='show 17 new notifications'
            color='inherit'
          >
            <NotificationsOutlinedIcon />
          </IconButton>
          <p>Sign up</p>
        </MenuItem>
      </Link>
    </Menu>
  )
}

export default renderMobileMenu
