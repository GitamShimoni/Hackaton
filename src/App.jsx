// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import PhotoCarousel from "./Components/homepage/PhotoCarousel/PhotoCarousel";
import UploadWidget from './Components/UploadPage/UploadWidget'
import Layout from "./Components/Layout/Layout";
import Aboutus from "./Components/about/Aboutus";
import Homepage from "./Components/homepage/Homepage"
import Loginpage from "./Components/login/Loginpage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Register from "./Components/Register/Register";
import OtherPeopleProfile from "./Components/ProfilePage/OtherPeopleProfile";
import AwardPage from "./Components/Award/AwardPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/upload" element={<UploadWidget />}/>
          <Route path="/about" element={<Aboutus />} />
          <Route path="/get20points" element={<AwardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:id" element={<OtherPeopleProfile />} />
          

        </Route>
      </Routes>

    </>
  );
}

export default App;
