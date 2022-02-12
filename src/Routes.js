import React, { lazy, Suspense } from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import Box from '@mui/material/Box'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import News from './pages/News/News'

function Routes () {
  console.log('hi')
  return (
    <Suspense fallback={'Loading...'}>
      <Header />
        <Box sx={{ position: 'relative', paddingTop: '64px' }}>
      <Switch>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/news' element={<News />} />
      </Switch>
        </Box>
    </Suspense>
  )
}

export default Routes
