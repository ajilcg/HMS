import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import { json, useLocation, useNavigate, useParams } from 'react-router-dom';
import { button } from '@material-tailwind/react';
import { Button } from '@mui/material';
import Table from 'react-bootstrap/Table';
import Marquee from "react-fast-marquee";



 
  const img=[
    {'url':'src/assets/images/Pediatric.jpg','caption':'Making a connection between happiness and health','color':'white'},
 {'url':'https://asianheartinstitute.org/wp-content/uploads/2023/12/diagnostics-banner.webp','caption':'Transforming Lives with Better Healthcare','color':'black'},
 {'url':'src/assets/images/hospital-image.jpg','caption':'25 years of doing the impossible','color':'white'},
 {'url':'src/assets/images/home-banner.jpg','caption':'The Health Care You Can Trust','color':'black'}
  
 ]


  
export const PatientGrid = (props) => {
  const [users, setUsers] = useState([])
 const [loading, setLoading] = useState(false)
 const {value}=useParams();
 
 
 const navigate=useNavigate();
console.log(props.state);
 

useEffect(() => { 
   fetch("https://localhost:44338/api/Patient")
    .then((data) => data.json())
    .then((data) => setUsers(data))
    console.log(users);

}, [] 
)

 const selectCustomer = (rowValue) => {
  if(value==1){
    navigate('/UpdatePatient',{state:rowValue})

  }
  else if(value==3){
    navigate(`/trackTratment/${encodeURIComponent('B+.')}`,{state:rowValue}) 

  }
 else{
    navigate(`/trackTratment/${encodeURIComponent('A+.')}`,{state:rowValue}) 
  }
  }

return (
      <div class='col-sm-12'>
      {loading ? (
        <div>Loading...</div>
      ) : (
      <>
      {/* <Carousel fade controls={false}  interval={700} >
        {img.map((Item)=>(
          <Carousel.Item>
          <img className='crsl' sizes='100vw' src={Item.url} class="d-block w-100" alt="..."></img>
        <Carousel.Caption className='blr'>
          <h1 className='txt' style={{color:Item.color}}>{Item.caption}</h1>
         </Carousel.Caption>
      </Carousel.Item>

  ))}

    </Carousel>   */}
    

  <Box   sx={{ height: 450,maxWidth: '100%',paddingTop:"6rem"}}>
 
   <Table hover>
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Gender</th> 
          <th>Mediical History</th> 

        </tr>
      </thead>
      <tbody>
         {users.map((item,index)=>(
        <tr onClick={() => selectCustomer(item.id)}>
           <td>{index=index+1}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.dateOfBirth}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td> 
          <td>{item.medicalHistory}</td> 

        </tr>
         ))}
         
      </tbody>
    </Table>
     
   </Box></> 
     )}
    </div>       
  )
}
export default PatientGrid