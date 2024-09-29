import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { RegisterPatient } from './Patient/RegisterPatient';

 
const Cards=(props)=>{
  const {imgs,titles,content,path}=props.DashboardItems;


  // for (const [i, product] of products.entries()) {
  //   list.push(<li>{product}</li>)
  // }
 
  const Menu = [...content];
   const Child=[...path];
 
   return(
        
 <>
{/* <h1>{content}</h1> */}
<div style={{padding:'0.8rem'}}>
<Card sx={{ maxWidth: 340,height:405}}>
      <CardMedia
        sx={{ height: 140 }} 
 image={imgs}
  // title={props.val.titles}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titles}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {content}
        </Typography> */}
      </CardContent>

       {(Menu).map((Menu,index) =>(
       <CardActions >
        

       <Link to={Child[index]}> <Button style={{textAlign:'left'}} size="small">{Menu}</Button></Link><br></br>
     </CardActions>    
    ))}
   {/* <CardActions>
        <Link to={path}> <Button size="small">{content[0]} ➔</Button></Link><br></br>
       </CardActions> */}
      {/* <CardActions>
        <Link to={path}> <Button size="small">Click Here ➔</Button></Link><br></br>
       </CardActions> */}
    </Card>

    </div>
 </>
    )
}
export default Cards