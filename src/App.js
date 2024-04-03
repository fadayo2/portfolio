import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import Skills from './components/Skills';
import About from './components/About';
import { motion } from 'framer-motion';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className='navbar'>
          <div className='navlinks'>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89, border: " 2px solid black ", borderRight: 'none', borderLeft: 'none' }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'black' , textDecoration:'none'}} to="/">Home</Link></motion.div>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89, border: " 2px solid black ", borderRight: 'none', borderLeft: 'none' }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'black' , textDecoration:'none'}} to="/projects">Projects</Link></motion.div>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89, border: " 2px solid black ", borderRight: 'none', borderLeft: 'none' }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'black' , textDecoration:'none'}} to="/about">About</Link></motion.div>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89, border: " 2px solid black ", borderRight: 'none', borderLeft: 'none' }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'black' , textDecoration:'none'}} to="/skills">Skills</Link></motion.div>
          </div>
        </nav>      
       </div>

       <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/projects' Component={Project}/>
        <Route path='/about' Component={About}/>
        <Route path='/skills' Component={Skills} />
       </Routes>

    </Router>
  );
}

export default App;
