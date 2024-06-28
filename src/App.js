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
          <motion.div className='logo' whileHover={{ scale:.95 }}>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="black"/>
              </svg> &nbsp;
              <p>Marvellous</p>
          </motion.div>
          <div className='navlinks'>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89 }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'var(--white)' , textDecoration:'none'}} to="/"><span style={{color: 'var(--primary)'}}>#</span>home</Link></motion.div>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89 }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'var(--white)' , textDecoration:'none'}} to="/projects"><span style={{color: 'var(--primary)'}}>#</span>projects</Link></motion.div>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89 }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'var(--white)' , textDecoration:'none'}} to="/about"><span style={{color: 'var(--primary)'}}>#</span>about-me</Link></motion.div>
            <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 0.89 }} transition={{ ease: 'linear', type: 'spring', stiffness: 1000, duration: .5 }}><Link style={{color:'var(--white)' , textDecoration:'none'}} to="/skills"><span style={{color: 'var(--primary)'}}>#</span>contacts</Link></motion.div>
          </div>
          <svg className='burger' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="5" width="24" height="2" fill="#D9D9D9"/><rect x="9" y="12" width="15" height="2" fill="#D9D9D9"/></svg>

        </nav>      
      </div>

      <div className='sCta'>
          <svg width="2" height="191" viewBox="0 0 2 191" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499995 191L0.500004 0L1.5 4.37114e-08L1.5 191L0.499995 191Z" fill="#ABB2BF"/>
          </svg>
          <div>
            <a href='https://github.com/fadayo2'><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 0C4.69875 0 0 4.58819 0 10.2529C0 14.7899 3.00562 18.6219 7.17937 19.9804C7.70437 20.0701 7.90125 19.7625 7.90125 19.4934C7.90125 19.2499 7.88813 18.4425 7.88813 17.5838C5.25 18.058 4.5675 16.9558 4.3575 16.3791C4.23938 16.0843 3.7275 15.1743 3.28125 14.9308C2.91375 14.7386 2.38875 14.2644 3.26813 14.2516C4.095 14.2388 4.68563 14.9949 4.8825 15.3025C5.8275 16.8533 7.33688 16.4175 7.94063 16.1484C8.0325 15.4819 8.30812 15.0334 8.61 14.777C6.27375 14.5207 3.8325 13.6364 3.8325 9.71466C3.8325 8.59965 4.23938 7.67689 4.90875 6.95918C4.80375 6.70286 4.43625 5.65193 5.01375 4.24215C5.01375 4.24215 5.89313 3.97301 7.90125 5.29308C8.74125 5.06239 9.63375 4.94704 10.5263 4.94704C11.4188 4.94704 12.3113 5.06239 13.1513 5.29308C15.1594 3.9602 16.0387 4.24215 16.0387 4.24215C16.6163 5.65193 16.2488 6.70286 16.1438 6.95918C16.8131 7.67689 17.22 8.58684 17.22 9.71466C17.22 13.6492 14.7656 14.5207 12.4294 14.777C12.81 15.0975 13.1381 15.7126 13.1381 16.6738C13.1381 18.0452 13.125 19.1474 13.125 19.4934C13.125 19.7625 13.3219 20.0829 13.8469 19.9804C15.9314 19.2935 17.7428 17.9854 19.026 16.2403C20.3092 14.4953 20.9996 12.4012 21 10.2529C21 4.58819 16.3013 0 10.5 0Z" fill="#ABB2BF"/></svg></a>
            <a href=''><svg width="21" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z" fill="#ABB2BF"/></svg></a>
            <a href=''><svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2249 26C19.9045 26 24.6526 18.6883 24.6526 12.3587C24.6526 12.1541 24.6526 11.9466 24.6439 11.742C25.5683 11.0617 26.3661 10.2194 27 9.25459C26.1365 9.64165 25.2215 9.89676 24.2846 10.0116C25.2715 9.41189 26.0106 8.46827 26.3646 7.35615C25.4374 7.91461 24.4226 8.30664 23.3646 8.51509C22.6533 7.74493 21.712 7.23473 20.6866 7.0635C19.6612 6.89228 18.6089 7.06959 17.6927 7.56797C16.7764 8.06635 16.0474 8.85799 15.6185 9.82026C15.1896 10.7825 15.0848 11.8617 15.3203 12.8907C13.444 12.795 11.6084 12.2995 9.93262 11.4362C8.25682 10.5728 6.77823 9.36104 5.59275 7.87935C4.99093 8.93611 4.80726 10.1861 5.07905 11.3756C5.35085 12.565 6.05772 13.6047 7.05612 14.2835C6.30796 14.2576 5.57625 14.0534 4.92 13.6872V13.753C4.92129 14.86 5.2985 15.9326 5.98788 16.7895C6.67726 17.6464 7.63651 18.2351 8.7035 18.4559C8.2985 18.5694 7.88014 18.6259 7.46006 18.624C7.16391 18.6249 6.86836 18.597 6.57744 18.5407C6.87901 19.4937 7.46621 20.3269 8.25679 20.9236C9.04738 21.5203 10.0018 21.8507 10.9863 21.8685C9.3138 23.2039 7.24789 23.9282 5.12125 23.9247C4.74652 23.9263 4.37206 23.9044 4 23.859C6.15843 25.258 8.66512 26.0008 11.2249 26Z" fill="#ABB2BF"/></svg></a>
          </div>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
