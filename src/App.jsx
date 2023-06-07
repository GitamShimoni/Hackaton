import { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/homepage/Homepage";
import Login from "./Components/login/Login";
import Layout from "./Components/Layout/Layout";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
