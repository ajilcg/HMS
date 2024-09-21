import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
 import { Routes,Route,Outlet,useLocation} from 'react-router-dom'
import { Login } from './Components/Login/Login.jsx'
import { Patient } from './Components/Patient/Patient'
import { ManageDoctor } from './Components/Doctor/ManageDoctor'
import Dashboard from './Components/Dashboard'


  



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
     <App />


     <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/Patient' element={<Patient/>}></Route>
      <Route path='/ManageDr' element={<ManageDoctor/>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      </Routes> 

    </BrowserRouter>
  </StrictMode>,
    
  
)
export default main