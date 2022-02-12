import { createTheme } from '@mui/material'
import { purple, deepPurple, pink, red } from '@mui/material/colors'

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins","Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  palette: {
    primary: { main: 'rgb(0, 127, 255)' },
    secondary: { main: '#3E5060' }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          // backgroundColor: 'rgb(10, 25, 41)'
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 18
        }
      }
    }
  }
})
export default theme
