import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
import { Routes,Route } from 'react-router-dom'
import PageNotFound from './component/PageNotFound'
function App() {


  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element ={<Signup/>}/>
        <Route path='*' element ={<PageNotFound/>}/>
     </Routes>
    </div>
    
  )
}

export default App
