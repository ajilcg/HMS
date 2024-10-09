import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
import Cards from './Components/Cards'
import { Routes,Route,Outlet,useLocation} from 'react-router-dom'
 import DashboardItems from './Components/DashboardItems'
import { ManageDoctor } from './Components/Doctor/ManageDoctor'
import { Footer } from './Components/Footer'
  import DashboardChart from './Components/DashboardChart'
import CarauselItems from './Components/CarauselItems'


   function App() {
 
    const location=useLocation();
   
    return (
    <>
 {location.pathname!='/login' && location.pathname!='/' && location.pathname!='/SignUp' && location.pathname!='/Login' &&  <Dashboard></Dashboard>}
 <Outlet></Outlet>
      {location.pathname!='/login'  && location.pathname!='/UpdatePatient' && location.pathname!='/SignUp' && location.pathname!='/Login' && location.pathname!='/RegisterPatient' && <CarauselItems></CarauselItems>}
 
     {location.pathname=='/' && <DashboardChart></DashboardChart>}

      <Outlet></Outlet>

 
     <div className='row gx-0'  >
      {DashboardItems.map((item)=>(
      <div className='col-sm' > 
     {location.pathname=='/' && <Cards  key={item.id}  DashboardItems={item}></Cards>}

        </div>
        ))} 
 </div>
 
 {location.pathname!=='/Login' && location.pathname!=='/SignUp' && <Footer></Footer>}

 

      </>
  )
}

export default App
