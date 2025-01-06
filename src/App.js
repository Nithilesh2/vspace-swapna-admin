import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Import the Login component
import Home from './components/Home'; // Import the OverviewCards component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* This renders the Login component */}
      <Route path="/home" element={<Home />} /> {/* This renders the OverviewCards component */}
    </Routes>
  );
}

export default App;
