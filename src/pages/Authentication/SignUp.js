import React from 'react'
import { Container, Paper, ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import { createTheme } from '@mui/material'
import { Typography } from '@mui/material'
import { Button, Checkbox, ButtonGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import oldTheme from '../../assets/theme'

const theme = createTheme(oldTheme, {
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          '&::before': {
            display: 'none'
          },
          '&::after': {
            display: 'none'
          }
        },
        underline: {}
      }
    }
  },
  typography: {
    fontFamily: 'poppins'
  }
})
function SignIn () {
  const navigate = useNavigate()
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh'
        }}
      >
        <Box
          sx={{
            width: '60%',
            display: { xs: 'none', md: 'flex' },
            backgroundColor: 'primary.main',
            flexGrow: 1
          }}
        ></Box>

        <Box
          // component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            // paddingTop: '150px',
            width: { md: '500px', sm: '100%' },
            backgroundColor: 'whitesmoke',
            justifyContent: 'flex-start',
            paddingTop: {md: '100px'},
            alignItems: 'center'
          }}
          noValidate
          autoComplete='off'
        >
          <Box
            sx={{
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <svg
              onClick={() => navigate('/')}
              xmlns='http://www.w3.org/2000/svg'
              width='130'
              height='142'
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
          </Box>
          <Box
            sx={{
              padding: '20px 25px',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px'
            }}
          >
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gap: 2
              }}
            >
              <TextField
                variant='filled'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                variant='filled'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                helperText='Password must contain a capital letter, numbers and a symbol'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Box>

            <FormControlLabel
              control={<Checkbox value='allowExtraEmails' color='primary' />}
              sx={{
                fontSize: '12px',
                marginY: '10px',
                '& .MuiTypography-body1': { fontSize: '14px' }
              }}
              label='I want to receive inspiration, marketing promotions and updates via email.'
            />
            <ButtonGroup sx={{ gap: 2 }}>
              <Button
                type='submit'
                color='primary'
                fullWidth
                variant='contained'
              >
                Sign Up
              </Button>
              <Button
                onClick={() => navigate('/sign-in')}
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
              >
                Go To Sign in
              </Button>
            </ButtonGroup>

            <Typography
              variant='body2'
              sx={{
                textDecoration: 'none',
                '&:hover': { color: 'primary', cursor: 'pointer' }
              }}
            >
              Forgot Password?{' '}
              <Typography
                component='a'
                variant='a'
                sx={{ textDecoration: 'underline' }}
                onClick={() => navigate('/forgot-password')}
              >
                Reset
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default SignIn
