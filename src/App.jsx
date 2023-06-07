// import { useState } from "react";
import {  Routes, Route } from "react-router-dom";
import PhotoCarousel from "./Components/homepage/PhotoCarousel/PhotoCarousel";
import Login from "./Components/login/Login";
import Layout from "./Components/Layout/Layout";

import "./App.css";
import UploadWidget from './Components/UploadPage/UploadWidget'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<PhotoCarousel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/upload" element={<UploadWidget />} />
    </Routes>
    </>
  );
}

export default App;
