import { Routes, Route } from "react-router-dom";
// import PhotoCarousel from "./Components/homepage/PhotoCarousel/PhotoCarousel";
import UploadWidget from './Components/UploadPage/UploadWidget'
import Login from "./Components/login/Login";
import Layout from "./Components/Layout/Layout";
import Aboutus from "./Components/about/Aboutus";
import Homepage from "./Components/homepage/Homepage"
import Loginpage from "./Components/login/Loginpage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Register from "./Components/Register/Register";
import OtherPeopleProfile from "./Components/ProfilePage/OtherPeopleProfile";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/upload" element={<UploadWidget />}/>
          <Route path="/login" element={<Homepage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:id" element={<OtherPeopleProfile />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
