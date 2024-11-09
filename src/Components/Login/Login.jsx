import React, { createContext, useContext, useState } from 'react'
import './Login.css'
import './Login.js'
import { TextField } from '@mui/material'
 import { Form } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
 
export const Login = () => {
   const [validated, setValidated] = useState(false);
  const [errorMsg,setErrorMsg]=useState("");
 const[form1,setForm]=useState({
  Username: '',
  Password: ''
 });
const [response, setResponse] = useState(null);
const [error, setError] = useState(null);

function capValue(event){
  setForm({...form1,[event.target.name]:event.target.value});
   
  }

const navigate=useNavigate();
  const finalSubmit = async (e) => {

     setValidated(true);
     setErrorMsg(null);
  
      e.preventDefault();
    try { 
      
        const form = e.currentTarget;
        
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(false);
    }
  
      const res = await axios.post('https://localhost:7277/api/Login', form1); 
      setResponse(res.data);
 
            setError(null); // Clear previous errors
      //  document.getElementById("Form1").reset();
   
     }
     catch (err) {
      setError(err.response ? err.response.data : 'An error occurred');
      if (err.response.data.status==404)
      {
         setErrorMsg(404);
         setValidated(false);
      }
      
      setResponse(null); // Clear previous response
    }
    if (errorMsg!==404 && validated==true && form1.Password!=='' && form1.Username!==''){
       navigate('/',{state:form1.Username})

    };

    };


  return (

    <>
     <body className='bd'>
       {/* <h3>Login Here</h3> */}
   <canvas id="Mycanvas"></canvas>
{/* 
    <div  class="background">

         <div class="shape"></div>
        <div class="shape"></div> 
        
        
    </div> */}
    <Form noValidate href='/' validated={validated} className='Form'>
  <h3>Login</h3>
  <Form.Label>Username</Form.Label>
      <Form.Control  className='input'  onChange={capValue} name='Username'  required placeholder='Email' type='email'> 
     </Form.Control>
     <Form.Control.Feedback type='invalid'>Invalid Username</Form.Control.Feedback>
 <br></br> 
 <Form.Label>Password</Form.Label>
      <Form.Control  className='input' isInvalid={!validated} id='pswd'  onChange={capValue} name='Password'  required placeholder='Password' type='password'> 
     </Form.Control>
     <Form.Control.Feedback type='invalid'>Invalid Username or Password</Form.Control.Feedback>
 <br></br>
        {/* <label className='lbl' for="username">Username</label>
        <input required type="text" placeholder="Email or Phone" id="username"></input>

        <label  className='lbl' for="password">Password</label>
        <input required type="password" placeholder="Password" id="password"></input><br></br> */}
        <small>Dont have an account? </small><a href='/SignUp' style={{cursor:'pointer',color:'blue'}} >Register</a>
      {/* <Link to={'/'}> <button ty className='btnn'>Log In</button></Link>  */}
   <button onClick={finalSubmit}  className='btnn'>Log In</button> 

    </Form>

</body>
         </>
            )
}
export default Login