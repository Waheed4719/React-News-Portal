import React, { useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { Link } from 'react-router-dom'

function RenderMenu ({ anchorEl, menuId, isMenuOpen, handleMenuClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
          width: '100%',
          height: '100%'
        }}
        to='/news'
      >
        <MenuItem>News</MenuItem>
      </Link>
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
          width: '100%',
          height: '100%'
        }}
        to='/sign-in'
      >
        <MenuItem>Sign in</MenuItem>
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
        <MenuItem>Sign up</MenuItem>
      </Link>
    </Menu>
  )
}

export default RenderMenu
