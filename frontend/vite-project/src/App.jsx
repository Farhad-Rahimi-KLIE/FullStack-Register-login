import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Home from './Components/Home'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App