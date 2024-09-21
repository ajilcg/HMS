import React from 'react'
import './Login.css'
import { TextField } from '@mui/material'

export const Login = () => {
  return (
 
    <>

 
   <body>

   {/* <h3>Login Here</h3> */}
 
    <div class="background">

         <div class="shape"></div>
        <div class="shape"></div> 
        
        
    </div>
    <form>
  <h3>Login</h3>
        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input><br></br><br></br>

        <button className='btn'>Log In</button>
      
    </form>
</body>
        </>
            )
}
