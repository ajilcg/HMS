import React from 'react'
import './Login.css';

export const SignUp = () => {
    
  return (
    <>
 
 <body className='signupBdy area'>
 <canvas id="Mycanvas"></canvas>

 {/* <h3>Login Here</h3> */}

 <div class="background">
      <div class="shape"></div>
     <div class="shape"></div> 
     
     
 </div>
 <form className='signForm'>
<h3>Sign Up</h3>
     <label className='lbl' for="username">Username</label>
     <input type="text" placeholder="Email or Phone" id="username"></input>

     <label  className='lbl' for="password">Password</label>
     <input type="password" placeholder="Password" id="password"></input>
     <label  className='lbl' for="password">Confirm Password</label>
     <input type="password" placeholder="Confirm Password" id="password">
     </input><br></br>
    <small>Already have an account?</small> <a href='/Login' style={{cursor:'pointer',color:'blue'}} >Login</a>
     <button className='btn'>Log In</button>
   
 </form>
</body>
   </>
  )
  
}
 export default SignUp