import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@dmc4719/ckeditor5-custom-build/build/ckeditor'
import { CONFIG } from '../../components/CKEditor/CkeditorConfig'
import MyCKEditorUploadAdapter from '../../components/CKEditor/MyCKEditorUploadAdapter'
import '../../assets/styles/css/ckeditor.css'
import { TextField, Box, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Button, Checkbox, ButtonGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function CreateBlog () {
  const navigate = useNavigate()
  const [category, setCategory] = React.useState([])

  const handleChange = event => {
    setCategory(event.target.value)
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
      <Typography sx={{ marginBottom: '10px' }} component='h1' variant='h5'>
        {' '}
        Create Post
      </Typography>
      <TextField
        variant='outlined'
        required
        fullWidth
        id='title'
        label='Title'
        name='email'
        autoComplete='email'
        InputLabelProps={{
          shrink: true
        }}
        size='small'
      />
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel
          sx={{ backgroundColor: 'white', padding: '0px 5px' }}
          shrink={true}
          id='demo-simple-select-helper-label'
        >
          Category*
        </InputLabel>
        <Select
        multiple
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          value={category}
          onChange={handleChange}
          label='Category'
          size='small'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
          <MenuItem value={'Politics'}>Politics</MenuItem>
          <MenuItem value={'Sports'}>Sports</MenuItem>
        </Select>
        <FormHelperText>Choose Category</FormHelperText>
      </FormControl>
      <CKEditor
        // ref={editor}
        config={CONFIG}
        editor={ClassicEditor}
        // data={editorValue.value}
        onReady={editor => {
          console.log('Editor is ready to use!', editor)
          //   editor.config.contentsCss = '/createBlog.css'
          editor.plugins.get('FileRepository').createUploadAdapter = loader => {
            return new MyCKEditorUploadAdapter({ loader })
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData()

          console.log({ event, editor, data })
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor)
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor)
        }}
      />
      <ButtonGroup sx={{ gap: 2, width:'400px' }}>
        <Button type='submit' color='primary' fullWidth variant='contained'>
          Create Post
        </Button>
        <Button
          onClick={() => navigate('/dashboard/my-blogs')}
          type='submit'
          fullWidth
          variant='contained'
          color='secondary'
        >
          Go Back
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default CreateBlog
