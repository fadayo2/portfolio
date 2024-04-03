import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {
return (
    <div>
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
)
}

export default Home