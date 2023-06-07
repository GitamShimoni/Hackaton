// import { useState } from "react";
import {  Routes, Route } from "react-router-dom";
import PhotoCarousel from "./Components/PhotoCarousel/PhotoCarousel";
import Login from "./Components/login/Login";
import Layout from "./Components/Layout/Layout";

import "./App.css";
import UploadWidget from './Components/UploadPage/UploadWidget'
import ProfilePage from "./Components/ProfilePage/ProfilePage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/upload" element={<UploadWidget />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
    </>
  );
}

export default App;
