import React, { useEffect, useState } from 'react';
import './Patient.css';
import { Box } from '@mui/material';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { th } from 'date-fns/locale';
 
 export const RegisterPatient = () => {
 const images=[{"id":"0","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/5000/3333"},{"id":"1","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/LNRyGwIJr5c","download_url":"https://picsum.photos/id/1/5000/3333"},{"id":"2","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/N7XodRrbzS0","download_url":"https://picsum.photos/id/2/5000/3333"},{"id":"3","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/Dl6jeyfihLk","download_url":"https://picsum.photos/id/3/5000/3333"},{"id":"4","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/y83Je1OC6Wc","download_url":"https://picsum.photos/id/4/5000/3333"},{"id":"5","author":"Alejandro Escamilla","width":5000,"height":3334,"url":"https://unsplash.com/photos/LF8gK8-HGSg","download_url":"https://picsum.photos/id/5/5000/3334"},{"id":"6","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/tAKXap853rY","download_url":"https://picsum.photos/id/6/5000/3333"},{"id":"7","author":"Alejandro Escamilla","width":4728,"height":3168,"url":"https://unsplash.com/photos/BbQLHCpVUqA","download_url":"https://picsum.photos/id/7/4728/3168"},{"id":"8","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/xII7efH1G6o","download_url":"https://picsum.photos/id/8/5000/3333"},{"id":"9","author":"Alejandro Escamilla","width":5000,"height":3269,"url":"https://unsplash.com/photos/ABDTiLqDhJA","download_url":"https://picsum.photos/id/9/5000/3269"}]
   

    const[forms,setForm]=useState({
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
    setForm({...forms,[event.target.name]:event.target.capValue})
}
function finalOut(){
   console.log(forms);
    axios.post('https://localhost:44338/api/Patient',forms).then((res)=>{
        console.log(res);
    }) 
}
  return (
    <>
 <Carousel className='carousel'      showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}  >

            {images.map((item)=>(
                <img   src={item.download_url} />
             ))}
{/*               
                 <div>
                    <img sizes='10vw' src="src/assets/images/hospital-image.jpg" />
                

                 </div>
                <div>
                    <img   style={{width:'100%'}} src="src/assets/images/doctor.jpg" />
                 </div>
                <div>
                    <img src="src/assets/images/billing.jpg" />
                 </div> */}
            </Carousel>
 <form className='patientForm'>
 <div class="row">
  <div class='col-md-6'>
   <div class="form-row">
  <div class="form-group col-md-6">
      <label for='fName'>First Name</label>
      <input id='fName' name='firstName' type="First name" class="form-control" placeholder="First Name"></input>
    </div> 
    <div class="form-group col-md-6">
      <label for='lName'>Last Name</label>
      <input id='lName' name='lastName' type="LastName" class="form-control"  placeholder="Last Name"></input>
    </div>
    <div class="form-group col-md-6">
      <label for='dob' >Date Of Birth</label>
      <input id='dob' name='dateOfBirth' type="date" class="form-control" />
          </div>
          <div class="form-group col-md-6">
      <label for='email'>Email</label>
      <input id='email'  name='email' type="email" class="form-control"  placeholder="Email"></input>
    </div>
    <div class="form-group col-md-6">
      <label for='gender'>Gender</label>
      <select id='gender' name='gender' style={{height:'50px'}} class="form-control">
        <option selected>Please Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>N/A</option> 
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for='mStatus'>Marital Status</label>
      <select id='mStatus'  name='maritalStatus' style={{height:'50px'}} class="form-control">
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
   <button type="submit" onClick={finalOut} class="btn btn-primary">Sign in</button>
   </div> 
{/* -------------------- */}
   <div class='col-md-6' id='cf' style={{paddingTop:'2rem'}}>
 

 

  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
     <div class="carousel-item active">
      <img src="src/assets/images/billing.jpg" class="d-block w-100" alt="..."></img>

    </div>
    <div class="carousel-item">
      <img src="src/assets/images/doctor.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img sizes='100vw' src="src/assets/images/patient.jpg" class="d-block w-100" alt="..."></img>
    </div>
  </div>  
</div>
 </div>
 </div>
 </form>
  
  </>
  )
  
}
 
export default RegisterPatient