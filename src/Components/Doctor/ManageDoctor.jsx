 import React, { useEffect, useState } from 'react';
// import './Patient.css';
import { Box, Card } from '@mui/material';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
 import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Carousel } from 'react-bootstrap';
import { ReactBootstrap_Carousel } from 'react-bootstrap-carousel';
import { Item } from 'semantic-ui-react';
import CardContent from '@mui/material/CardContent';
import { end } from '@popperjs/core';


export const ManageDoctor = () => {
  const images=[{"id":"0","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/5000/3333"},{"id":"1","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/LNRyGwIJr5c","download_url":"https://picsum.photos/id/1/5000/3333"},{"id":"2","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/N7XodRrbzS0","download_url":"https://picsum.photos/id/2/5000/3333"},{"id":"3","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/Dl6jeyfihLk","download_url":"https://picsum.photos/id/3/5000/3333"},{"id":"4","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/y83Je1OC6Wc","download_url":"https://picsum.photos/id/4/5000/3333"},{"id":"5","author":"Alejandro Escamilla","width":5000,"height":3334,"url":"https://unsplash.com/photos/LF8gK8-HGSg","download_url":"https://picsum.photos/id/5/5000/3334"},{"id":"6","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/tAKXap853rY","download_url":"https://picsum.photos/id/6/5000/3333"},{"id":"7","author":"Alejandro Escamilla","width":4728,"height":3168,"url":"https://unsplash.com/photos/BbQLHCpVUqA","download_url":"https://picsum.photos/id/7/4728/3168"},{"id":"8","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/xII7efH1G6o","download_url":"https://picsum.photos/id/8/5000/3333"},{"id":"9","author":"Alejandro Escamilla","width":5000,"height":3269,"url":"https://unsplash.com/photos/ABDTiLqDhJA","download_url":"https://picsum.photos/id/9/5000/3269"}]
   

 const img=[
   {'url':'src/assets/images/Pediatric.jpg','caption':'Making a connection between happiness and health','color':'white'},
{'url':'https://asianheartinstitute.org/wp-content/uploads/2023/12/diagnostics-banner.webp','caption':'Transforming Lives with Better Healthcare','color':'black'},
{'url':'src/assets/images/hospital-image.jpg','caption':'25 years of doing the impossible','color':'white'},
{'url':'src/assets/images/home-banner.jpg','caption':'The Health Care You Can Trust','color':'black'}
 
]
const [response, setResponse] = useState(null);
const [error, setError] = useState(null);
    const[form,setForm]=useState({
   Name: '',
 Specialization: '',
  Time:'',
  Day: '',
  
     });

function capValue(event){
    setForm({...form,[event.target.name]:event.target.value})
 }
// function finalOut(){
//    console.log(datas);
//     axios.post('https://localhost:44338/api/Patient/create',datas).then((res)=>{
//         console.log(res.datas);
//         alert(res.datas);

//     }) 
     
// }


const finalOut = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('https://localhost:7061/api/Doctor', form); 
    setResponse(res.data);
    console.log(res.data);
         setError(null); // Clear previous errors
     document.getElementById("Form1").reset();

  } catch (err) {
    setError(err.response ? err.response.data : 'An error occurred');
    setResponse(null); // Clear previous response
  }
};
  return (
    <>
    <Carousel fade controls={false}  interval={700} >
  {img.map((Item)=>(
       <Carousel.Item>
      <img className='crsl' sizes='100vw' src={Item.url} class="d-block w-100" alt="..."></img>
        <Carousel.Caption className='blr'>
          <h1 className='txt' style={{color:Item.color}}>{Item.caption}</h1>
         </Carousel.Caption>
      </Carousel.Item>

  ))}

    </Carousel>  

 <form id='Form1' onSubmit={ finalOut } className='patientForm'>
   <Card sx={{ minWidth: 275 }}>
  <CardContent>
 <div class="row">
  <div class='col-md-12'>
  <div>
  <strong className='form-group'>Add Doctors</strong>
<hr></hr>
  </div>
   <div class="form-row">
  <div class="form-group col-md-6">
      <label for='Name'> Name</label>
      <input required id='Name' onChange={capValue} name='Name'   class="form-control" placeholder=" Name"></input>
    </div> 
    <div class="form-group col-md-6">
      <label for='Specialization'> Specialization</label>
      <input required id='Specialization' onChange={capValue} name='Specialization'   class="form-control" placeholder="Specialization"></input>
    </div> 
    <div class="form-group col-md-6">
      <label for='Time'> Time</label>
      <input required id='Time' onChange={capValue} name='Time'   class="form-control" placeholder="Time"></input>
    </div> 
    <div class="form-group col-md-6">
      <label for='Day'> Day</label>
      <input required id='Day' onChange={capValue} name='Day'   class="form-control" placeholder="Day"></input>
    </div> 
    
    </div>
   
  
    

   
    
<div class="btnb">
    <button type="submit" class='btn subbtn' >Register</button> 
   <button type="reset" class='btn btn-secondary'  >Clear</button>
   </div>
</div>

   <div class='col-md-6' id='cf' style={{paddingTop:'2rem'}}>
 
 
 </div>
 </div>
 </CardContent>
 </Card>
 </form>

    </>
    <div></div>
  )
}
