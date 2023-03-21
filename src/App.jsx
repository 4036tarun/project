import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Mynavbar1 from './component/Navbar1'
import Myfooter1 from './component/Footer1'
import Mycontent1 from './component/Content1'
import Mycarousel1 from './component/Carousel1'
import Comment1 from './component/Comment'
import Mylogin from './component/Login1'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Dog2 from './component/2nd pages/Dog2'
// import Home1 from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Mynavbar1></Mynavbar1>

<Mycarousel1></Mycarousel1>
   <Mycontent1></Mycontent1>
 
   


   
   {/* <BrowserRouter>
   
      
   <Routes>
   
   <Route  path='/Home' element={<Home1></Home1>}/>
    <Route  path='/Dog' element={<Dog2></Dog2>}/>
    

   </Routes>
   
   </BrowserRouter> */}
   <Mylogin></Mylogin>
   <Comment1></Comment1>
   <Myfooter1></Myfooter1>
   </>
  )
}

export default App
