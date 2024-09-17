import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
import Cards from './Components/Cards'
import { Routes,Route } from 'react-router-dom'
import { Patient } from './Components/Patient/Patient'
  function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Dashboard>     </Dashboard>  */}
     <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/Patient' element={<Patient/>}></Route>
      </Routes> 
     </>
  )
}

export default App
