import { useState } from 'react'
import reactLogo from './assets/react.svg'
 import './App.css'
import Mynavbar1 from './component/Navbar1'
import Myfooter1 from './component/Footer1'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home1 from './component/Home'
import Services2 from './component/Servicesdetail'
import Medhelp1 from './component/Medhelp'
import About2 from './component/About2'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <>

   <BrowserRouter>
   <Mynavbar1></Mynavbar1>
      
   <Routes>
   <Route  path='/' element={<Home1></Home1>}/>
   
   <Route  path='/Home' element={<Home1></Home1>}/>


     <Route  path='/About' element={<About2></About2>}/>
     <Route  path='/Services' element={<Services2></Services2>}/>
     <Route  path='/medical-help' element={<Medhelp1></Medhelp1>}/>
     {/* <Route  path='/*' element={<Ho></Ho>}/> */}

   </Routes>
   <Myfooter1></Myfooter1>
   </BrowserRouter>


   </>
  )
}

export default App
