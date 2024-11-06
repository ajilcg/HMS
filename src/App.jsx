import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
import Cards from './Components/Cards'
import { Routes,Route,Outlet,useLocation, useNavigate, BrowserRouter, useParams} from 'react-router-dom'
 import DashboardItems from './Components/DashboardItems'
 import { Footer } from './Components/Footer'
  import DashboardChart from './Components/DashboardChart'
import CarauselItems from './Components/CarauselItems'
 import { Login } from './Components/Login/Login.jsx'
 import { ManageDoctor } from './Components/Doctor/ManageDoctor'
 import RegisterPatient from './Components/Patient/RegisterPatient.jsx'
import { SignUp } from './Components/Login/SignUp.jsx'
import { Carousel } from 'react-bootstrap';
 import { UpdatePatient } from './Components/Patient/UpdatePatient.jsx'
 import Marquee from "react-fast-marquee";

   function App() {
 
    const location=useLocation();
   
    return (
    <>
 {location.pathname!='/login'&& location.pathname!=='/billing'   &&  location.pathname!='/' && location.pathname!='/SignUp' && location.pathname!='/Login' &&  <Dashboard></Dashboard>}
 
 
 <Outlet></Outlet>
      {/* {location.pathname!='/login'  && location.pathname!='/UpdatePatient' && location.pathname!='/patientGrid/2' && location.pathname!='/patientGrid/1' && location.pathname!='/SignUp' && location.pathname!='/Login' && location.pathname!='/RegisterPatient' && location.pathname!='/trackTratment' && <CarauselItems></CarauselItems>} */}
      {location.pathname=='/' && <CarauselItems></CarauselItems>}
      <br></br>
 {location.pathname=='/' && <Marquee gradient pauseOnHover gradientColor='rgb(170, 102, 204)'>
  Our team of experts provides top-notch medical treatment with empathy using the most advanced technology
</Marquee>}<br></br>

     {/* {location.pathname=='/' && <DashboardChart></DashboardChart>} */}

      <Outlet></Outlet>

 
     <div className='row gx-0'  >
      {DashboardItems.map((item)=>(
      <div className='col-sm' > 
     {location.pathname=='/' && <Cards  key={item.id}  DashboardItems={item}></Cards>}

        </div>
        ))} 
 </div>
 
 {location.pathname!=='/Login' && location.pathname!=='/SignUp'&& location.pathname!=='/billing'  && <Footer></Footer>}

      </>



  )
  
}


export default App
