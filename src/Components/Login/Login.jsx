import React from 'react'
import './Login.css'
import './Login.js'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
 
export const Login = () => {
  return (
 
    <>
 
    <body className='bd'>
       {/* <h3>Login Here</h3> */}
   {/* <canvas id="Mycanvas"></canvas> */}

    {/* <div  class="background">

         <div class="shape"></div>
        <div class="shape"></div> 
        
        
    </div> */}
    <form  className='Form'>
  <h3>Login</h3>
        <label className='lbl' for="username">Username</label>
        <input required type="text" placeholder="Email or Phone" id="username"></input>

        <label  className='lbl' for="password">Password</label>
        <input required type="password" placeholder="Password" id="password"></input><br></br>
        <small>Dont have an account? </small><a href='/SignUp' style={{cursor:'pointer',color:'blue'}} >Register</a>
      {/* <Link to={'/'}> <button ty className='btnn'>Log In</button></Link>  */}
      <Link to={'/'}> <button href='/' className='btnn'>Log In</button></Link> 

    </form>

</body>
         </>
            )
}
export default Login