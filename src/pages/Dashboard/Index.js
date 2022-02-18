import { Box } from '@mui/system'
import React, { Suspense } from 'react'
import Common from './CommonUI'
import { Route, Routes, Outlet } from 'react-router-dom'
import Profile from './Profile'
import MyBlogs from './MyBlogs'
function Index () {
  
  return (
    <Box>
      <Common>
        <h1>Dashboard</h1>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='profile' element={<Profile />} />
          <Route path='my-blogs' element={<MyBlogs />} />
        </Routes>
      </Common>
      <Outlet />
    </Box>
  )
}

export default Index
