import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {

  const email = "fadunmiyemarvellous@gmail.com ";
  const subject = "";
  const body = "Body text here.";

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
return (
    <div>
        <section className='herosection'>
          <div className='profile'>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ cursor: 'grabbing', scale: 0.92 }} transition={{ ease: 'linear', type: 'spring', stiffness: 100 }} drag dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }} className='image'></motion.div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className='name'> Hi , my name is Marvellous Fadunmiye </motion.div>
          </div>
          <div className='descriptionTxt'>
            <h1>Web Developer & Instructor</h1>
            <motion.button
              onClick={handleClick}
              className='cta'
              initial={{scale:1}}
              whileTap={{scale:.9}}
              whileHover={{scale:1.1}}
            > Hire me </motion.button>
          </div>
        </section>
    </div>
)
}

export default Home