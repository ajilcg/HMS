import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard'
import Cards from './Components/Cards'
 function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dashboard>     </Dashboard>  
    </>
  )
}

export default App
