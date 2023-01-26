import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp/SignUpForm'
import SignUpCompletion from './components/SignUpCompletion/SignUpCompletion'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp/>} />
        <Route path='signupcompletion' element={<SignUpCompletion/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
