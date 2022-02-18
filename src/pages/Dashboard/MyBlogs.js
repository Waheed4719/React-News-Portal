import React from 'react'
import { Link } from 'react-router-dom'
function MyBlogs () {
  return (
    <div>
      <Link to='/dashboard/create-post'>Create Post</Link>
    </div>
  )
}

export default MyBlogs
