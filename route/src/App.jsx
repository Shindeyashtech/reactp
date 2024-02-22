import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Home } from './component/Home'
import { About } from './component/About'
import { Navbar } from './component/Navbar'
function App() {
  

  return (
    <>
    <Navbar>

   <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='about' element={<About/>} ></Route>
   </Routes>
    </Navbar>
    </>
    )
}

export default App
