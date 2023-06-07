// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PhotoCarousel from "./Components/PhotoCarousel/PhotoCarousel";
import Login from "./Components/login/Login";
import Layout from "./Components/Layout/Layout";
import Aboutus from "./Components/about/Aboutus";

import "./App.css";
import UploadWidget from "./Components/UploadPage/UploadWidget";
import ProfilePage from "./Components/ProfilePage/ProfilePage";

import Homepage from "./Components/homepage/Homepage";
// test
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/upload" element={<UploadWidget />}/> */}
          <Route path="/about" element={<Aboutus />} />
          <Route path="/" element={<PhotoCarousel />} />
          <Route path="/upload" element={<UploadWidget />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
