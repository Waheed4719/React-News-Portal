import logo from './logo.svg'
import './App.css'
import Routes from './Routes'
import { Container, ThemeProvider } from '@mui/material'
import theme from './assets/theme'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'

function App () {
  return (
    <div className='App'>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path='/sign-in' element={<SignIn />} />
            <Route exact path='/sign-up' element={<SignUp />} />
            <Route path='/*' element={<Routes />} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
