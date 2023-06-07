import { useState } from 'react'
import {Router, Routes, Route} from 'react-router-dom'
import Homepage from './Components/Homepage'
import Login from './Components/Login'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
