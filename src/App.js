import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // =====react-router import
import React, { useState, useEffect } from "react"; 
import Layout from './Masterlayout/layout'; // ======Layout-component
import Home from './Component/Home'; // =======Home-component
import About from './Component/About'; // =======About-component
import Blog from './Component/Blog';  // =====Blog-component
import Career from './Component/Career'; // =====Career-component
import Contact from './Component/Contact'; // ======Contact-component
import PlusLoader from './PlusLoader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // =======Simulate a delay (e.g., fetching data)===//
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  if (loading) {
    return <PlusLoader />; //=========== Show the loader while loading
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
