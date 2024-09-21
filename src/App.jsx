import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
import Cards from './Components/Cards'
import { Routes,Route,Outlet,useLocation} from 'react-router-dom'
import { Patient } from './Components/Patient/Patient'
import DashboardItems from './Components/DashboardItems'
import { ManageDoctor } from './Components/Doctor/ManageDoctor'
import { Login } from './Components/Login/Login'
  function App() {

    const location=useLocation();
console.log(location.pathname);
    return (
    <>
  
   {location.pathname!='/login' && <Dashboard ></Dashboard>}
   <Outlet></Outlet>
     
     <div className='row'>
      {DashboardItems.map((item)=>(
      <div className='col-sm'> 
     {location.pathname=='/' && <Cards  key={item.id}  DashboardItems={item}></Cards>}
        </div>
        ))}
 </div>
     

     </>
  )
}

export default App
