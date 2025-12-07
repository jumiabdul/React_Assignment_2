import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Users from "./Pages/Users";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import './App.css'
import UserView from "./Pages/UserView";
import AboutUs from "./Pages/AboutUs";

function App() {

  return (
    <BrowserRouter>
      <div className="bg-gray-100 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:id" element={<UserView />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
