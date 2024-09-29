import React from 'react'
import './Login.css'
import './Login.js'
import { TextField } from '@mui/material'
 
export const Login = () => {
  return (
 
    <>

 
   <body>

   {/* <h3>Login Here</h3> */}
   <canvas id="Mycanvas"></canvas>

    <div class="background">

         <div class="shape"></div>
        <div class="shape"></div> 
        
        
    </div>
    <form className='Form'>
  <h3>Login</h3>
        <label className='lbl' for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>

        <label  className='lbl' for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input><br></br>
        <small>Dont have an account? </small><a href='/SignUp' style={{cursor:'pointer',color:'blue'}} >Register</a>
        <button className='btnn'>Log In</button>
      
    </form>
</body>
        </>
            )
}
export default Login