import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Tooltip from '@mui/material/Tooltip'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import MoreIcon from '@mui/icons-material/MoreVert'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import RenderMenu from './Menus/RenderMenu'
import RenderMobileMenu from './Menus/RenderMobileMenu'
import { useNavigate } from 'react-router-dom'

const blueColor = 'rgb(0, 127, 255)'

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: blueColor,
          fontWeight: '300',
          fontSize: 20,
          '&.search-icon': {
            zIndex: 1
          }
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          padding: 0,
          ':not(.MuiMenuItem-root)': {
            height: '34px',
            width: '34px',
            border: '1px solid rgb(0, 127, 255)',
            borderRadius: '8px !important'
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: 'rgb(243, 246, 249)',
          border: '1px solid rgb(0, 127, 255)',
          color: 'rgb(62, 80, 96)',
          maxHeight: '34px',
          paddingY: '0px'
        },
        input: {
          padding: '0px 10px 0px 0px',
          color: '#000',
          fontSize: 14
        }
      }
    },

    MuiAppBar: {
      styleOverrides: {
        backgroundColor: 'red',
        color: blueColor,
        '& .MuiSvgIcon-root': {
          color: blueColor,
          fontWeight: '300',
          fontSize: 20
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          columnGap: '10px'
        }
      }
    }
  },
  typography: {
    fontFamily: 'Poppins',
    h6: {
      color: blueColor,
      fontWeight: 400
    }
  }
})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'rgb(62, 80, 96)',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch'
      }
    }
  }
}))

export default function Header () {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'

  const mobileMenuId = 'primary-search-account-menu-mobile'

  // 'rgba(10, 25, 41, 0.7)'
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position='fixed'
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgb(231, 235, 240)',
            borderStyle: 'solid',
            borderWidth: '0px 0px thin'
          }}
        >
          <Toolbar>
            <svg
              onClick={() => navigate('/')}
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='32'
              viewBox='0 0 36 32'
              fill='none'
              className='css-1170n61'
              style={{ cursor: 'pointer' }}
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z'
                fill='#007FFF'
              ></path>
            </svg>

            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                columnGap: '10px'
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon className='search-icon' />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Search…'
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Tooltip title='Mail'>
                <IconButton
                  size='large'
                  aria-label='show 4 new mails'
                  color='inherit'
                >
                  <Badge badgeContent={4} color='error'>
                    <MailOutlinedIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Tooltip title='Notifications'>
                <IconButton
                  size='medium'
                  aria-label='show 17 new notifications'
                  color='inherit'
                >
                  <Badge badgeContent={17} color='error'>
                    <NotificationsOutlinedIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Tooltip title='Settings'>
                <IconButton
                  size='large'
                  edge='end'
                  aria-label='account of current user'
                  aria-controls={menuId}
                  aria-haspopup='true'
                  onClick={handleProfileMenuOpen}
                  color='inherit'
                >
                  <SettingsOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {isMobileMenuOpen && (
          <RenderMobileMenu
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            mobileMenuId={mobileMenuId}
            isMobileMenuOpen={isMobileMenuOpen}
            handleMobileMenuClose={handleMobileMenuClose}
          />
        )}
        {isMenuOpen && (
          <RenderMenu
            anchorEl={anchorEl}
            menuId={menuId}
            isMenuOpen={isMenuOpen}
            handleMenuClose={handleMenuClose}
          />
        )}
      </Box>
    </ThemeProvider>
  )
}
