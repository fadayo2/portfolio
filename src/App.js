import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">

      <nav className='navbar'>
        <div className='navlinks'>
          <motion.div initial={{ opacity:1 }} whileHover={{ scale: .89 , border: " 2px solid black " , borderRight : 'none' , borderLeft : 'none' }} transition={{ ease: 'linear' , type: 'spring' , stiffness: 1000 , duration: .5 }}>Home</motion.div>
          <motion.div initial={{ opacity:1 }} whileHover={{ scale: .89 , border: " 2px solid black " , borderRight : 'none' , borderLeft : 'none' }} transition={{ ease: 'linear' , type: 'spring' , stiffness: 1000 , duration: .5 }}>Projects</motion.div>
          <motion.div initial={{ opacity:1 }} whileHover={{ scale: .89 , border: " 2px solid black " , borderRight : 'none' , borderLeft : 'none' }} transition={{ ease: 'linear' , type: 'spring' , stiffness: 1000 , duration: .5 }}>About</motion.div>
          <motion.div initial={{ opacity:1 }} whileHover={{ scale: .89 , border: " 2px solid black " , borderRight : 'none' , borderLeft : 'none' }} transition={{ ease: 'linear' , type: 'spring' , stiffness: 1000 , duration: .5 }}>Skills</motion.div>
        </div>
      </nav>

      <section className='herosection'>
          <div className='profile'>
            <motion.div initial={{ scale:0 }} whileInView={{ scale: 1 }} whileTap={{ cursor: 'grabbing' ,scale: 0.92 }} transition={{ ease: 'linear' , type: 'spring' , stiffness: 100 }} drag dragConstraints = {{ left: 0 , right: 0 , bottom: 0 , top: 0 }} className='image'></motion.div>
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
