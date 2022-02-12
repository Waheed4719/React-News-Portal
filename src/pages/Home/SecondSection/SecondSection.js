import { Box, Grid, Typography, Paper } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import Card from './Card'

const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        container: {},
        item: {
          //   maxWidth: '350px',
          //   width: '350px'
        }
      }
    }
  }
})

function SecondSection () {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Grid container justifyContent='center'  spacing={4}>
          {['Sneaky as a Snake', 'Fast as a Cheetah', 'Strong as an Ox'].map(
            value => (
              <Grid key={value}  item xs={12} sm={6} md={4} sx={{ justifyContent: {xs: 'center'}, display: 'flex'}}>
                <Card title={value} />
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default SecondSection
