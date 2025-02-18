import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Class10 from './pages/Class10';
import Class12 from './pages/Class12';
import Resources from './pages/Resources';
import Premium from './pages/Premium';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class10" element={<Class10 />} />
        <Route path="/class12" element={<Class12 />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;