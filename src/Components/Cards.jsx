import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 
const Cards=(props)=>{

     return(
 <>
<Card sx={{ maxWidth: 340 }}>
      <CardMedia
        sx={{ height: 140 }} 
 image={props.val.imgs}
//  title={props.val.titles}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.val.titles}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {props.val.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
 </>
    )
}
export default Cards