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

const AddMedicine = () => {
  const [medicine, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
   
    name: '',
    quantity: '',
    price: ''
    

    
    
  });

  const AddMedicine = () => {
    axios
      .post("https://localhost:7277/api/Medicine", newMedicine)
      .then((response) => {
        console.log("medicines added:", response.data);
        setMedicines((prevMedicines) => [...prevMedicines, response.data]);
        // Clear the input fields after submission
        setNewMedicine({
            name: '',
            quantity: '',
            price: ''
        });
      })
      .catch((error) => {
        console.error("There was an error adding the medicine!", error);
      });
  };

  return (
    <div style={{padding:'6rem'}}>
<form>
      <h2>Add Medicine</h2>
      <br></br>
      
       <div class="form-group col-md-6">
        <label for='Name'>Name</label>
      <input required id='Name' name='Name'  onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}   class="form-control" placeholder="Name"></input>
    </div> 
     
       <div class="form-group col-md-6">
      <label for=' Quantity'>  Quantity</label>
      <input required id=' Quantity'  onChange={(e) => setNewMedicine({ ...newMedicine,  quantity: e.target.value })}    class="form-control" placeholder=" Quantity"></input>
    </div>
      
      <div class="form-group col-md-6">
      <label for='Price'> Price</label>
      <input required id='Price' onChange={(e) => setNewMedicine({ ...newMedicine, price: e.target.value })}    class="form-control" placeholder="Price"></input>
    </div>
     
      <button onClick={AddMedicine}>Add</button>

       <ul>
        {medicine.map((medicine) => (
          <li key={medicine.id}>
            {medicine.patientname} {medicine.name} - {medicine.quantity} - {medicine.price}- 
          </li>
        ))}
      </ul>
      </form>
    </div>
  );
};

export default AddMedicine;