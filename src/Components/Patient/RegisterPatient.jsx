import React, { useEffect, useState } from 'react';
import './Patient.css';
import { Box } from '@mui/material';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Carousel } from 'react-bootstrap';
import { ReactBootstrap_Carousel } from 'react-bootstrap-carousel';
import { Item } from 'semantic-ui-react';
 export const RegisterPatient = () => {
 const images=[{"id":"0","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/5000/3333"},{"id":"1","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/LNRyGwIJr5c","download_url":"https://picsum.photos/id/1/5000/3333"},{"id":"2","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/N7XodRrbzS0","download_url":"https://picsum.photos/id/2/5000/3333"},{"id":"3","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/Dl6jeyfihLk","download_url":"https://picsum.photos/id/3/5000/3333"},{"id":"4","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/y83Je1OC6Wc","download_url":"https://picsum.photos/id/4/5000/3333"},{"id":"5","author":"Alejandro Escamilla","width":5000,"height":3334,"url":"https://unsplash.com/photos/LF8gK8-HGSg","download_url":"https://picsum.photos/id/5/5000/3334"},{"id":"6","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/tAKXap853rY","download_url":"https://picsum.photos/id/6/5000/3333"},{"id":"7","author":"Alejandro Escamilla","width":4728,"height":3168,"url":"https://unsplash.com/photos/BbQLHCpVUqA","download_url":"https://picsum.photos/id/7/4728/3168"},{"id":"8","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/xII7efH1G6o","download_url":"https://picsum.photos/id/8/5000/3333"},{"id":"9","author":"Alejandro Escamilla","width":5000,"height":3269,"url":"https://unsplash.com/photos/ABDTiLqDhJA","download_url":"https://picsum.photos/id/9/5000/3269"}]
   

 const img=[
{'url':'https://asianheartinstitute.org/wp-content/uploads/2023/12/diagnostics-banner.webp','caption':'Transforming Lives with Better Healthcare','color':'black'},
{'url':'src/assets/images/hospital-image.jpg','caption':'25 years of doing the impossible','color':'white'},
{'url':'src/assets/images/Pediatric.jpg','caption':'Making a connection between happiness and health','color':'white'},
{'url':'src/assets/images/home-banner.jpg','caption':'The Health Care You Can Trust','color':'black'}
 
]
const [response, setResponse] = useState(null);
const [error, setError] = useState(null);
    const[datas,setForm]=useState({
   firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  gender: '',
  maritalStatus: '',
  address:'',
  contactNumber: 0,
  city:'',
  state:'',
  emergancyContactNumber: 0
     });

function capValue(event){
    setForm({...datas,[event.target.name]:event.target.value})
    console.log(datas.firstName);
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
    const res = await axios.post('https://localhost:44338/api/Patient/create', datas,{mode:'cors'});
    setResponse(res.datas);
    console.log(res.datas);
    setError(null); // Clear previous errors
  } catch (err) {
    setError(err.response ? err.response.data : 'An error occurred');
    setResponse(null); // Clear previous response
  }
};
  return (
    <>
 


<Carousel fade controls={false}   interval={7000} >
  {img.map((Item)=>(
       <Carousel.Item>
      <img className='crsl' sizes='100vw' src={Item.url} class="d-block w-100" alt="..."></img>
        <Carousel.Caption className='blr'>
          <h1 className='txt' style={{color:Item.color}}>{Item.caption}</h1>
         </Carousel.Caption>
      </Carousel.Item>

  ))}

    </Carousel>

 <form className='patientForm'>
 <div class="row">
  <div class='col-md-12'>
  <div>
  <strong className='form-group'>Patient Registration</strong>
<hr></hr>
  </div>
   <div class="form-row">
  <div class="form-group col-md-6">
      <label for='fName'>First Name</label>
      <input id='fName' onChange={capValue} name='firstName' type="First name" class="form-control" placeholder="First Name"></input>
    </div> 
    <div class="form-group col-md-6">
      <label for='lName'>Last Name</label>
      <input id='lName' onChange={capValue} name='lastName' type="LastName" class="form-control"  placeholder="Last Name"></input>
    </div>
    <div class="form-group col-md-6">
      <label for='dob' >Date Of Birth</label>
      <input id='dob' onChange={capValue} name='dateOfBirth' type="date" class="form-control" />
          </div>
          <div class="form-group col-md-6">
      <label for='email'>Email</label>
      <input id='email' onChange={capValue}  name='email' type="email" class="form-control"  placeholder="Email"></input>
    </div>
    <div class="form-group col-md-6">
      <label for='gender'>Gender</label>
      <select id='gender' onChange={capValue} name='gender' style={{height:'50px'}} class="form-control">
        <option selected>Please Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>N/A</option> 
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for='mStatus'>Marital Status</label>
      <select id='mStatus' onChange={capValue} name='maritalStatus' style={{height:'50px'}} class="form-control">
        <option selected>Please Select</option>
        <option>Single</option>
        <option>Married</option>
        <option>Divorced</option> 
      </select>
    </div> 
 
</div>
 
<div class="form-group">
    <label for='addrs'>Address</label>
    <input id='addrs' onChange={capValue} name='address'  type="text" class="form-control" placeholder="Apartment, studio, or floor"></input>
  </div>

  <div class="form-row">
  <div class="form-group col-md-6">
      <label for='contact'>Contact Number</label>
      <input id='contact' onChange={capValue} name='contactNumber' type="Text" class="form-control"></input>
    </div> 
    

    <div class="form-group col-md-6">
      <label for='city'>City</label>
      <input id='city' onChange={capValue} name='city' type="text" class="form-control"></input>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="state">State</label>
      <input id='state' onChange={capValue} name='state' type="text" class="form-control" ></input>
    </div>
    <div class="form-group col-md-6">
      <label for='eContact'>Emergency Contact</label>
      <input id='eContact' onChange={capValue} name='emergancyContactNumber' type="Text" class="form-control"></input>
    </div> 
</div>
   <button type="submit" class='btn btn-info' style={{width:'20%', backgroundColor:'#32b1a8'}} onClick={ finalOut } >Register</button>
   </div> 
{/* -------------------- */}
   <div class='col-md-6' id='cf' style={{paddingTop:'2rem'}}>
 
 
 </div>
 </div>
 </form>
  
  </>
  )
  
}
 
export default RegisterPatient