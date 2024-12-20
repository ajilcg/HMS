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
import ViewDoctor from './Components/Doctor/ViewDoctor.jsx'
import UpdateDoctor from './Components/Doctor/UpdateDoctor.jsx'
import AddAppoinment from './Components/Appoinment/AddAppoinment.jsx'
import ViewAppoinment from './Components/Appoinment/ViewAppoinment.jsx'
import AddMedicine from './Components/Medicine/AddMedicine.jsx'
import ViewMedicine from './Components/Medicine/ViewMedicine.jsx'
import { PatientGrid } from './Components/Patient/PatientGrid.jsx'
import  TrackTreatment from './Components/PatientBilling/TrackTreatment.jsx'
import Billing from './Components/PatientBilling/Billing.jsx'
import './scss/main.scss';
import * as serviceWorker from './serviceWorker.js';

 


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
      <Route path='/ManageDoctor' element={<ManageDoctor></ManageDoctor>}></Route>
      <Route path='/ViewDoctor'  element={<ViewDoctor></ViewDoctor>}></Route>
      <Route path='/UpdateDoctor' element={<UpdateDoctor></UpdateDoctor>}></Route>
      <Route path='/AddAppoinment' element={<AddAppoinment></AddAppoinment>}></Route>
      <Route path='/ViewAppoinment' element={<ViewAppoinment></ViewAppoinment>} ></Route>
      <Route path='/AddMedicine' element={<AddMedicine></AddMedicine>}></Route>
      <Route path='/ViewMedicine' element={<ViewMedicine></ViewMedicine>}></Route>
      <Route path='/PatientGrid/:value' element={<PatientGrid></PatientGrid>}></Route>
      <Route path='/trackTratment/:value' element={<TrackTreatment></TrackTreatment>} ></Route>
     <Route path='/GenerateBill'  element={<Billing></Billing>}></Route>
      </Routes> 
     <App />



    </BrowserRouter>
  </StrictMode>
)
serviceWorker.register()
export default main