import React, { useState } from 'react'
import './Login.css';
import axios from 'axios';
import { Form } from 'react-bootstrap';
 
export const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [errorMsg,setErrorMsg]=useState("");

const[form1,setForm]=useState({
  username: '',
  password: ''
 });
const [response, setResponse] = useState(null);
const [error, setError] = useState(null);

 

function capValue(event){
setForm({...form1,[event.target.name]:event.target.value});
}

const finalSubmit = async (e) => {

  setValidated(true);

    e.preventDefault();
  try { 
    
      const form = e.currentTarget;
      if (form1.password!==form1.confirmPswd){
        setErrorMsg("Password not matching..");
        e.preventDefault();
        e.stopPropagation();
        validated(false);
        form.checkValidity() == false;
         return false;
      }
      setErrorMsg("");

  if (form.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
  }
  setValidated(true);

    const res = await axios.post('https://localhost:7277/api/Login/Register', form1); 
    setResponse(res.data);
    console.log(res.data);
  
    alert(res.data);
         setError(null); // Clear previous errors
    //  document.getElementById("Form1").reset();

  } catch (err) {
    setError(err.response ? err.response.data : 'An error occurred');
    setResponse(null); // Clear previous response
  }
};
// function finalSubmit(){
//   if (form.pswd!==form.confirmPswd){}
// }
  return (
    <>
 
 <body className='signupBdy area'>
 <canvas id="Mycanvas"></canvas>

 {/* <h3>Login Here</h3> */}

 <div class="background">
      <div class="shape"></div>
     <div class="shape"></div> 
     
     
 </div>
 <Form noValidate validated={validated} className='signForm'>
<h3>Sign Up</h3>
<Form.Label>Email</Form.Label>
      <Form.Control  className='input'  onChange={capValue} name='username'  required placeholder='Email' type='email'> 
     </Form.Control>
<Form.Control.Feedback type='invalid'>Invalid Email</Form.Control.Feedback>
<br></br>
     <Form.Label>Password</Form.Label>
     <Form.Control  className='input'  onChange={capValue} name='password'   required placeholder='Password' type='password'> 
     </Form.Control>
     <br></br>
     <Form.Label>Confirm Password</Form.Label>
     <Form.Control isInvalid={!(form1.password===form1.confirmPswd)} className='input'   id='confirmPswd' onChange={capValue} name='confirmPswd'   required placeholder='Confirm Password' type='password'> 
     </Form.Control>
     <Form.Control.Feedback id="cnfrmPswd" type='invalid'>{errorMsg}</Form.Control.Feedback>

{/*      
     <label className='lbl' for="username">Username</label> 
     <input type='email'   onChange={capValue} name='username' placeholder="Email or Phone" id="username"></input>
     <label  className='lbl' for="password">Password</label>
     <input type="password" onChange={capValue} name='password' placeholder="Password" id="password"></input>
     <label  className='lbl' for="password">Confirm Password</label>
     <input type="password" onChange={capValue} name='confirmPswd' placeholder="Confirm Password" id="confirmPassword">
     </input><br></br> */}
    <small>Already have an account?</small> <a href='/Login' style={{cursor:'pointer',color:'blue'}} >Login</a>
     <button onClick={finalSubmit} className='btnn'>Register</button>
   
 </Form>
</body>
   </>
  )
  
}
 export default SignUp