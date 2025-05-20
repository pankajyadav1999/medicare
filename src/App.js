import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './Masterlayout/layout';
import Home from './Component/Home';
import About from './Component/About';
import Blog from './Component/Blog';
import Career from './Component/Career';
import Contact from './Component/Contact';
import LogIn from './Component/LogIn';
import PlusLoader from './PlusLoader';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or app loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PlusLoader />;
  }

  return (
    <Router>
      <Routes>
        {/* ---- Redirect root path to /login---- */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/*---- LogIn page - no layout---- */}
        <Route path="/login" element={<LogIn />} />

        {/* ------ Layout wrapper for all other pages ----*/}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/*----- Optional: catch-all 404 page ------/}
        {/*----- <Route path="*" element={<NotFound />} />------ */}
      </Routes>
    </Router>
  );
}

export default App;
