import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import DirectionsIcon from '@mui/icons-material/Directions'
import _ from 'lodash'

export default function SearchBar ({ search, setSearch }) {
  const debounceHandler = async (e) =>{ 
    _.debounce(setSearch(e.target.value),1000)
  }
  return (
    <Paper
      elevation={1}
      component='form'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <InputBase
        value={search}
        onChange={e => debounceHandler(e)}
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search News'
        inputProps={{ 'aria-label': 'search news' }}
      />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
