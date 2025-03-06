import { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
// import "./index.css"
import Body from './Body'
import Profile from './Profile'
import Login from './Login'

function App() {
 

  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Body></Body>}>
        <Route path="/profile" element={<Profile></Profile>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
      
      
      </Route>
    

    </Routes>
    
    
    
    </BrowserRouter>
    

    
    
    
    
    </>
   

    
   








  )
}

export default App
