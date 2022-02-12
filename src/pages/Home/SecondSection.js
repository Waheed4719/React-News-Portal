import { Box, Grid, Typography, Paper } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import Card from './SecondSection/Card'

const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        container: {
        },
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
        {/* <Grid
          container
          spacing={5}
          sx={{ width: '100%' }}
        >
          <Grid item>
            <Paper>
              <Card />
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Card />
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Card />
            </Paper>
          </Grid>
        </Grid> */}

        <Grid container justifyContent='center' spacing={4}>
          {["Sneaky as a Snake", "Fast as a Cheetah", "Strong as an Ox"].map(value => (
            <Grid key={value} item>
              <Card title={value} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default SecondSection
