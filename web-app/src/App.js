import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import EbookConverter from './pages/EbookConverter'; 
import Project2 from './pages/Project2';
import Contact from './pages/Contact';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="dropdown">
              <div>Projects</div>
              <div className="dropdown-content">
              <Link to="/projects/project1">eBook File Converter</Link>
              <Link to="/projects/project2">Project 2</Link>
              </div>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project1" element={<EbookConverter />} />
          <Route path="/projects/project2" element={<Project2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;