import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // react rout dom import//
import Layout from './Masterlayout/layout'; //layout-component
import Home from './Component/Home'; //home -componet
import About from './Component/About'; // about-component
import Blog from './Component/Blog';  // Blog-component
import Career from './Component/Career'; // career-component
import Contact from './Component/Contact'; // contact-componet
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        {/* Replace Switch with Routes */}
        <Routes>
          {/* Define routes inside Routes */}
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
