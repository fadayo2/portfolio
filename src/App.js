import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Project from './components/Project';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='navbar'>
          <div className='navlinks'>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89, border: " 2px solid black ", borderRight: 'none', borderLeft: 'none' }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'black' , textDecoration:'none'}} to="/">Home</Link></motion.div>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89, border: " 2px solid black ", borderRight: 'none', borderLeft: 'none' }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'black' , textDecoration:'none'}} to="/projects">Projects</Link></motion.div>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89, border: " 2px solid black ", borderRight: 'none', borderLeft: 'none' }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'black' , textDecoration:'none'}} to="/about">About</Link></motion.div>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89, border: " 2px solid black ", borderRight: 'none', borderLeft: 'none' }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'black' , textDecoration:'none'}} to="/skills">Skills</Link></motion.div>
          </div>
        </nav>

        <Routes>
          <Route path='/' Component={App}/>
          <Route path='/projects' Component={Project}/>
          <Route path='/about' Component={About}/>
          <Route path='/skills' Component={Skills}/>
        </Routes>


      </Router>

      <section className='herosection'>
        <div className='profile'>
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ cursor: 'grabbing', scale: 0.92 }} transition={{ ease: 'linear', type: 'spring', stiffness: 100 }} drag dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }} className='image'></motion.div>
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className='name'> Marvellous Fadunmiye </motion.div>
        </div>
        <div className='description'>
          Web Developer & Instructor
        </div>
      </section>
    </div>
  );
}

export default App;
