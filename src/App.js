import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LogIn from './page/auth/login/LogIn';
import Register from './page/auth/register/Register';
import Home from './page/home/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/header/Header';
import TopHeader from './components/layout/TopHeader';
import AllProperties from './page/properties/AllProperties';
import About from './page/about/About';
import PropertyDetails from './page/propertydetails/PropertyDetails';

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <TopHeader />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/properties" element={<AllProperties />} />
          <Route exact path="/details/:slug" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;