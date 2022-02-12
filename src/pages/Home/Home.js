import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Container, Typography } from '@mui/material'
import SecondSection from './SecondSection'
import { Navigate, useNavigate } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))
function Home () {
  const navigate = useNavigate()
  return (
    <Container sx={{ paddingBottom: 6 }}>
      <Box
        sx={{
          maxHeight: '700px',
          height: '700px',
          display: 'flex',
          alignItem: 'center',
          flexWrap: 'wrap-reverse',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: { md: '580px', sm: '100%' },
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItem: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            variant='h1'
            component='h1'
            sx={{
              fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
              fontWeight: 600,
              width: '100%',
              textAlign: { sm: 'center', xs: 'center', md: 'left' }
            }}
          >
            The React <br style={{ display: { sm: 'none' } }} />
            <span style={{ color: 'dodgerblue' }}>News Portal</span> you always
            wanted
          </Typography>
          <Typography
            variant='h5'
            component='h3'
            color='secondary'
            sx={{
              fontSize: '1rem',
              marginTop: '10px',
              textAlign: { sm: 'center', xs: 'center', md: 'left' }
            }}
          >
            MUI provides a robust, customizable, and accessible library of
            foundational and advanced components, enabling you to build your
            design system and develop React applications faster.
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: { md: '580px', sm: '100%' },
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
            backgroundColor: 'primary'
          }}
        >
          <lottie-player
          onClick={()=>navigate('/news')}
            src='https://assets8.lottiefiles.com/packages/lf20_ociqrozb.json'
            background='transparent'
            speed='1'
            style={{ width: '100%', height: '400px' }}
            loop
            autoplay
          ></lottie-player>
        </Box>
      </Box>
      <SecondSection />
      {/* <TestGrid /> */}
    </Container>
  )
}

export default Home
