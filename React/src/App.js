import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Video from './components/Video';
import UpLoad from './components/UpLoad';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Videos" element={<Video />} />
          <Route path="/upload" element={<UpLoad />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/singup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
