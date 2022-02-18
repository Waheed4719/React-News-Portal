import { Box } from '@mui/system'
import React, { Suspense } from 'react'
import Common from './CommonUI'
import { Route, Routes, Outlet } from 'react-router-dom'
import Profile from './Profile'
import MyBlogs from './MyBlogs'
import CreateBlog from './CreatePost'
function Index () {
  return (
    <Box>
      <Common>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='profile' element={<Profile />} />
          <Route path='my-blogs' element={<MyBlogs />} />
          <Route path='create-post' element={<CreateBlog />} />
        </Routes>
      </Common>
      <Outlet />
    </Box>
  )
}

export default Index
