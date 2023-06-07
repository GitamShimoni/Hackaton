import { Routes, Route } from "react-router-dom";
// import PhotoCarousel from "./Components/homepage/PhotoCarousel/PhotoCarousel";
// import UploadWidget from './Components/UploadPage/UploadWidget'
import Login from "./Components/login/Login";
import Layout from "./Components/Layout/Layout";
import Aboutus from "./Components/about/Aboutus";

import "./App.css";
import Homepage from "./Components/homepage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/upload" element={<UploadWidget />}/> */}
          <Route path="/login" element={<Homepage />} />
          <Route path="/about" element={<Aboutus />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
