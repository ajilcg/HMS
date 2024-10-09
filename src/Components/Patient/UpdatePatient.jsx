import React, { useEffect, useState } from 'react';
import './Patient.css';
import { Box, Card } from '@mui/material';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Carousel } from 'react-bootstrap';
import { ReactBootstrap_Carousel } from 'react-bootstrap-carousel';
import { Item } from 'semantic-ui-react';
import CardContent from '@mui/material/CardContent';
export const UpdatePatient = () => {
    const img=[
        {'url':'src/assets/images/Pediatric.jpg','caption':'Making a connection between happiness and health','color':'white'},
     {'url':'https://asianheartinstitute.org/wp-content/uploads/2023/12/diagnostics-banner.webp','caption':'Transforming Lives with Better Healthcare','color':'black'},
     {'url':'src/assets/images/hospital-image.jpg','caption':'25 years of doing the impossible','color':'white'},
     {'url':'src/assets/images/home-banner.jpg','caption':'The Health Care You Can Trust','color':'black'}
      
     ]
const [response, setResponse] = useState(null);
const [error, setError] = useState(null);
    const[form,setForm]=useState({
   firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  gender: '',
  maritalStatus: '',
  address:'',
  contactNumber: '',
  city:'',
  state:'',
  emergancyContactNumber: '',
  medicalHistory:''
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
    const res = await axios.post('https://localhost:44338/api/Patient', form); 
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
   <strong className='form-group'>Update Patient Profile</strong>
 <hr></hr>
   </div>
    <div class="form-row">
   <div class="form-group col-md-6">
       <label for='fName'>First Name</label>
       <input required id='fName' onChange={capValue} name='firstName'   class="form-control" placeholder="First Name"></input>
     </div> 
     <div class="form-group col-md-6">
       <label for='lName'>Last Name</label>
       <input required id='lName' onChange={capValue} name='lastName'   class="form-control"  placeholder="Last Name"></input>
     </div>
     <div class="form-group col-md-6">
       <label for='dob' >Date Of Birth</label>
       <input required id='dob' onChange={capValue} name='dateOfBirth' type="date" class="form-control" />
           </div>
           <div class="form-group col-md-6">
       <label for='email'>Email</label>
       <input required id='email' onChange={capValue}  name='email' type="email" class="form-control"  placeholder="Email"></input>
     </div>
     <div class="form-group col-md-6">
       <label for='gender'>Gender</label>
       <select required id='gender' onChange={capValue} name='gender' style={{height:'50px'}} class="form-control">
         <option selected>Please Select</option>
         <option>Male</option>
         <option>Female</option>
         <option>N/A</option> 
       </select>
     </div>
     <div class="form-group col-md-6">
       <label for='mStatus'>Marital Status</label>
       <select  required id='mStatus' onChange={capValue} name='maritalStatus' style={{height:'50px'}} class="form-control">
         <option selected>Please Select</option>
         <option>Single</option>
         <option>Married</option>
         <option>Divorced</option> 
       </select>
     </div> 
  
 <div class="form-group col-md-6">
 <label for='addrs'>Address</label>
     <input required id='addrs' onChange={capValue} name='address'  type="text" class="form-control" placeholder="Apartment, studio, or floor"></input>
   </div>
 
   <div class="form-group col-md-6">
 <label for='medicalHistory'>Medical History</label>
     <input placeholder='Medical History' required id='medical' onChange={capValue} name='medicalHistory'  type="text" class="form-control"></input>
   </div>
 </div>
  
 
 
   <div class="form-row">
   <div class="form-group col-md-6">
       <label for='contact'>Contact Number</label>
       <input placeholder='Contact Number'  required id='contact' onChange={capValue} name='contactNumber' type="Text" class="form-control"></input>
     </div> 
     
 
     <div class="form-group col-md-6">
       <label for='city'>City</label>
       <input placeholder='City' required id='city' onChange={capValue} name='city' type="text" class="form-control"></input>
     </div>
     </div>
     <div class="form-row">
     <div class="form-group col-md-6">
       <label for="state">State</label>
       <input placeholder='State' required id='state' onChange={capValue} name='state' type="text" class="form-control" ></input>
     </div>
     <div class="form-group col-md-6">
       <label  for='eContact'>Emergency Contact</label>
       <input placeholder='Emergency Contact' required id='eContact' onChange={capValue} name='emergancyContactNumber' type="Text" class="form-control"></input>
     </div> 
     <div class="form-group col-md-6">
 </div>
     </div> 
 <div class="btnb">
     <button type="submit" class='btn subbtn' >Register</button> 
    <button type="reset" class='btn btn-secondary'  >Clear</button>
    </div>
 </div>
 {/* -------------------- */}
    <div class='col-md-6' id='cf' style={{paddingTop:'2rem'}}>
  
  
  </div>
  </div>
  </CardContent>
  </Card>
  </form>  
  </>
 )
}