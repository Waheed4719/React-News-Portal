import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({article}) {
    const {author, content, description, publishedAt, source, title, url, urlToImage} = article
  return (
    <Card sx={{ maxWidth: '350px' }} elevation={0}>
      <CardMedia
        component="img"
        height="140"
        image={article?.urlToImage}
        alt="article image"
      />
      <CardContent sx={{padding: 1}}>
        <Typography gutterBottom variant="h5" component="div">
          {title.substring(0,60)+"..."}
        </Typography>
        <Typography variant="body2" color="text.secondary"  dangerouslySetInnerHTML={{
        __html:
        description?.substring(0,256) + '...'
      }} />
          {/* {description?.substring(0,256) + '...'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
