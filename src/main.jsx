import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
 import { Routes,Route,Outlet} from 'react-router-dom'
import { Login } from './Components/Login/Login.jsx'
 import { ManageDoctor } from './Components/Doctor/ManageDoctor'
import Dashboard from './Components/Dashboard'
import RegisterPatient from './Components/Patient/RegisterPatient.jsx'
import { SignUp } from './Components/Login/SignUp.jsx'
import { Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Footer } from './Components/Footer.jsx';
import { UpdatePatient } from './Components/Patient/UpdatePatient.jsx'
import { PatientGrid } from './Components/Patient/PatientGrid.jsx'
 

 


const img=[
  {'url':'src/assets/images/Pediatric.jpg','caption':'Making a connection between happiness and health','color':'white'},
{'url':'https://asianheartinstitute.org/wp-content/uploads/2023/12/diagnostics-banner.webp','caption':'Transforming Lives with Better Healthcare','color':'black'},
{'url':'src/assets/images/hospital-image.jpg','caption':'25 years of doing the impossible','color':'white'},
{'url':'src/assets/images/home-banner.jpg','caption':'The Health Care You Can Trust','color':'black'}

]

 createRoot(document.getElementById('root')).render(
  
   <StrictMode>
    <BrowserRouter>
    
     <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/RegisterPatient' element={<RegisterPatient/>}></Route>
      <Route path='/UpdatePatient' element={<UpdatePatient></UpdatePatient>}></Route>
      <Route path='/ManageDr' element={<ManageDoctor/>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
      <Route path='/Footer' element={<Footer></Footer>}></Route>
      <Route path='/PatientGrid' element={<PatientGrid></PatientGrid>}></Route>
      </Routes> 
     <App />



    </BrowserRouter>
  </StrictMode>,
  
)
export default main