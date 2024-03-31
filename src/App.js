import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const DynamicRouting = () => {
    return (
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    );
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <Navbar />
        <div className='flex-grow'>
          <DynamicRouting />
        </div>
        <Footer />
      </Router>
    </div>
  );
  
};

export default App;
