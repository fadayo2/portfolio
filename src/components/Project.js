import { motion } from 'framer-motion';
import '../components/project.css';
import carbnb from './img/carbnb.png'

const Project = () => {

  return (

      <section>
        <header>My projects</header>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='projectGrid'>
      <div className='projectCard'>
        <div className='projectImg'>
          <img src={carbnb}/>
        </div>
        <div className='txt'>
          <p>Carbnb Redesign</p>
        </div>
        <div className='description'>
          <ul>
            <li><a href='https://carbnb-two.vercel.app/' target='_blank'>Link to live demo</a></li>
            <li><a href='https://github.com/fadayo2/carbnb' target='_blank'>Link to the github page</a></li>
          </ul>
        </div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'>
            <img src={carbnb}/>
          </div>
          <div className='txt'>Simple calculator</div>
          <div className='description'>
            <ul>
              <li><a href='https://carbnb-two.vercel.app/' target='_blank'>Link to live demo</a></li>
              <li><a href='https://github.com/fadayo2/carbnb' target='_blank'>Link to the github page</a></li>
            </ul>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'>
            <img src={carbnb}/>
          </div>
          <div className='txt'>Simple calculator</div>
          <div className='description'>
            <ul>
              <li><a href='https://carbnb-two.vercel.app/' target='_blank'>Link to live demo</a></li>
              <li><a href='https://github.com/fadayo2/carbnb' target='_blank'>Link to the github page</a></li>
            </ul>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'>
            <img src={carbnb}/>
          </div>
          <div className='txt'>Simple calculator</div>
          <div className='description'>
            <ul>
              <li><a href='https://carbnb-two.vercel.app/' target='_blank'>Link to live demo</a></li>
              <li><a href='https://github.com/fadayo2/carbnb' target='_blank'>Link to the github page</a></li>
            </ul>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'>
            <img src={carbnb}/>
          </div>
          <div className='txt'>Simple calculator</div>
          <div className='description'>
            <ul>
              <li><a href='https://carbnb-two.vercel.app/' target='_blank'>Link to live demo</a></li>
              <li><a href='https://github.com/fadayo2/carbnb' target='_blank'>Link to the github page</a></li>
            </ul>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'>
            <img src={carbnb}/>
          </div>
          <div className='txt'>Simple calculator</div>
          <div className='description'>
            <ul>
              <li><a href='https://carbnb-two.vercel.app/' target='_blank'>Link to live demo</a></li>
              <li><a href='https://github.com/fadayo2/carbnb' target='_blank'>Link to the github page</a></li>
            </ul>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'>
            <img src={carbnb}/>
          </div>
          <div className='txt'>Simple calculator</div>
          <div className='description'>
            <ul>
              <li><a href='https://carbnb-two.vercel.app/' target='_blank'>Link to live demo</a></li>
              <li><a href='https://github.com/fadayo2/carbnb' target='_blank'>Link to the github page</a></li>
            </ul>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'>
            <img src={carbnb}/>
          </div>
          <div className='txt'>Simple calculator</div>
          <div className='description'>
            <ul>
              <li><a href='https://carbnb-two.vercel.app/' target='_blank'>Link to live demo</a></li>
              <li><a href='https://github.com/fadayo2/carbnb' target='_blank'>Link to the github page</a></li>
            </ul>
          </div>
        </div>
        <div className='projectCard'>
          <div className='projectImg'>
            <img src={carbnb}/>
          </div>
          <div className='txt'>Simple calculator</div>
          <div className='description'>
            <ul>
              <li><a href='https://carbnb-two.vercel.app/' target='_blank'>Link to live demo</a></li>
              <li><a href='https://github.com/fadayo2/carbnb' target='_blank'>Link to the github page</a></li>
            </ul>
          </div>
        </div>
      </motion.div>
      </section>    
      );
}

export default Project;
