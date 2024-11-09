import React, { useState } from 'react';
  
import { Box, Card } from '@mui/material';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Carousel, Form } from 'react-bootstrap';
import { ReactBootstrap_Carousel } from 'react-bootstrap-carousel';
import { Item, Label } from 'semantic-ui-react';
import CardContent from '@mui/material/CardContent';
import { end } from '@popperjs/core';

const AddAppoinment = () => {
  const [appoinments, setAppoinments] = useState([]);
  const [newAppoinment, setNewAppoinment] = useState({ 
    patientName: '',
    age: '',
    place: '',
    gender: '',
    // doctorname: '',
    department: '',
    appointmentDate: '' 
  });


  {console.log(newAppoinment)}
  const addPatient = () => {
    axios
    .post("https://localhost:7277/api/Appointment", newAppoinment)
    .then((response) => {
      // setAppoinments((prevAppoinments) => [...prevAppoinments, response.data]);
      console.log("appoinments added:", response.data);
        // Clear the input fields after submission
        setNewAppoinment({
          patientName: '',
            age: '',
            place: '',
            gender: '',
            // doctorname: '',
            department: '',
            appointmentDate: ''
        });
      })
      .catch((error) => {
        console.error("There was an error adding the patient!", error);
      });
  };

  return (
<form style={{padding:'6rem'}}>
       <h2>Add Appoinment</h2>
      <br></br>
      
       <div class="form-group col-md-6">
        <label for='Name'>Name</label>
      <input required id='Name' name='patientName'  onChange={(e) => setNewAppoinment({ ...newAppoinment, patientName: e.target.value })}   class="form-control" placeholder="Name"></input>
    </div> 
      
       <div class="form-group col-md-6">
      <label for='Age'> Age</label>
      <input required id='Age' name='age'  onChange={(e) => setNewAppoinment({ ...newAppoinment, age: e.target.value })}    class="form-control" placeholder="Age"></input>
    </div>
     
      <div class="form-group col-md-6">
      <label for='Place'> Place</label>
      <input required id='APlacege' name='place' onChange={(e) => setNewAppoinment({ ...newAppoinment, place: e.target.value })}    class="form-control" placeholder="Place"></input>
    </div>
      
      <div class="form-group col-md-6">
      <label for='gender'>Gender</label>
      <select required name='gender' id='gender' onChange={(e) => setNewAppoinment({ ...newAppoinment, gender: e.target.value })} style={{height:'50px'}} class="form-control">
        <option selected>Please Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>N/A</option> 
      </select>
    </div>
     
      <div class="form-group col-md-6">
      <label for='department'>Department</label>
      <select required name='department' id='department' onChange={(e) => setNewAppoinment({ ...newAppoinment, department: e.target.value })} style={{height:'50px'}} class="form-control">
        <option selected>Please Select</option>
        <option>Caridyolgy</option>
        <option>Dental</option>
        <option>ENT</option> 
      </select>
    </div>
      
      <div class="form-group col-md-6">
      <label for='appointmentDate' >Appoinment Date</label>
      <input required name='appointmentDate' id='appointmentDate' onChange={(e) => setNewAppoinment({ ...newAppoinment, appointmentDate: e.target.value })}  type="date" class="form-control" />
          </div><br></br>
          <div className=' col-md-10'>

       <button type="submit"  onClick={addPatient} style={{backgroundColor:'#a865ca',color:'white'}} class='btn subbtn' >Submit</button> 

</div>
       <ul>
        {appoinments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.patientName} {appointment.age} - {appointment.place} - {appointment.gender}- {appointment.doctorname} -{appointment.department} {appointment.appointmentDate}
          </li>
        ))}
      </ul>
       </form>
  );
};

export default AddAppoinment;