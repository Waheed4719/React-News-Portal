import { Grid, TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Apikeys from '../../assets/keys.json'
import Card from './Card'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import SearchBar from './SearchBar'

function News () {
  const [tab, setTab] = useState('everything')
  const [news, setNews] = useState([])
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const getNews = async () => {
    let NEWS_API_KEY = Apikeys.newsApiKey
    // let baseUrl = `https://newsapi.org/v2/` + `${tab}`
    // let url = `https://newsapi.org/v2/everything?from=2022-02-11&to=2022-02-11&sortBy=popularity&apiKey=${NEWS_API_KEY}`

    try {
      let response = await axios.get(
        `https://newsapi.org/v2/${tab}?q=${search?search:'all'}&from=2022-02-11&to=2022-02-11&sortBy=popularity&language=en&apiKey=${NEWS_API_KEY}`
      )
      if (response?.data?.articles) {
        setCount(response?.data?.totalResults ?? 0)
        setNews(response?.data?.articles)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getNews()
  }, [tab, search])
  const handleChange = (event, newValue) => {
    console.log(newValue)
    setTab(newValue)
  }
  return (
    <Container>
      <Box sx={{ justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: '10px'
          }}
        >
          <Tabs
            sx={{ width: 'fit-content', margin: '0 auto 0 0' }}
            value={tab}
            onChange={handleChange}
            aria-label='disabled tabs example'
          >
            <Tab label='Everything' value='everything' />
            <Tab label='Top Headlines' value='top-headlines' />
          </Tabs>
          <SearchBar search={search} setSearch = {setSearch} />
        </Box>

        <Grid
          container
          justifyContent={'flex-start'}
          style={{ marginTop: 40 }}
          spacing={4}
        >
          {news?.map((article, index) => (
            <Grid item key={index} xs={4}>
              <Card article={article} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default News
