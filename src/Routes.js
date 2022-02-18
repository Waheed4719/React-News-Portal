import React, { lazy, Suspense } from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import Box from '@mui/material/Box'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import News from './pages/News/News'
import Blogs from './pages/Blogs/Blogs'
import DetailPage from './pages/Blogs/DetailPage'

function Routes () {
  console.log('in routes')
  return (
    <Suspense fallback={'Loading...'}>
      <Header />
      <Box sx={{ position: 'relative', paddingTop: '64px' }}>
        <Switch>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/news' element={<News />} />
          <Route exact path='/blogs' element={<Blogs />} />
          <Route exact path='/blogs/:id' element={<DetailPage />} />
        </Switch>
      </Box>
    </Suspense>
  )
}

export default Routes
