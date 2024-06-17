import React from 'react';
import { motion } from 'framer-motion';
import heroImg from './img/heroImg.png';
import carbnb from './img/carbnb.png';
import abtImg from './img/abtImg.png';


const Home = () => {

  // const email = "fadunmiyemarvellous@gmail.com ";
  // const subject = "";
  // const body = "Body text here.";

  // const handleClick = () => {
  //   window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // };
return (
    <div>
        <section className='herosection'>
          <div className='heroTxt'>
            <h1>Marvellous is a <span style={{color:'var(--primary)'}}>web Instructor</span> and <span style={{color: 'var(--primary)'}}>front-end developer</span></h1>
            <p>He crafts responsive websites where technologies meet creativity</p>
            <button>Contact me !!</button>
          </div>
          <div className='heroimg'>
            <div className='hlogo'><svg width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_64_1298" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 39.75H38.75H77.5V78.5H38.75V117.25H77.5V156H38.75H0V117.25V78.5V39.75Z"/></mask><path d="M0 39.75V38.75H-1V39.75H0ZM77.5 39.75H78.5V38.75H77.5V39.75ZM77.5 78.5V79.5H78.5V78.5H77.5ZM38.75 78.5V77.5H37.75V78.5H38.75ZM38.75 117.25H37.75V118.25H38.75V117.25ZM77.5 117.25H78.5V116.25H77.5V117.25ZM77.5 156V157H78.5V156H77.5ZM0 156H-1V157H0V156ZM38.75 38.75H0V40.75H38.75V38.75ZM77.5 38.75H38.75V40.75H77.5V38.75ZM78.5 78.5V39.75H76.5V78.5H78.5ZM38.75 79.5H77.5V77.5H38.75V79.5ZM39.75 117.25V78.5H37.75V117.25H39.75ZM38.75 118.25H77.5V116.25H38.75V118.25ZM76.5 117.25V156H78.5V117.25H76.5ZM77.5 155H38.75V157H77.5V155ZM0 157H38.75V155H0V157ZM-1 117.25V156H1V117.25H-1ZM-1 78.5V117.25H1V78.5H-1ZM-1 39.75V78.5H1V39.75H-1Z" fill="#C778DD" mask="url(#path-1-inside-1_64_1298)"/><mask id="path-3-outside-2_64_1298" maskUnits="userSpaceOnUse" x="76.5" y="0" width="80" height="119" fill="black"><rect fill="white" x="76.5" width="80" height="119"/><path fill-rule="evenodd" clip-rule="evenodd" d="M77.5 1H116.25H155V39.75V78.5V117.25H116.25H77.5V78.5H116.25V39.75H77.5V1Z"/></mask><path d="M77.5 1V0H76.5V1H77.5ZM155 1H156V0H155V1ZM155 117.25V118.25H156V117.25H155ZM77.5 117.25H76.5V118.25H77.5V117.25ZM77.5 78.5V77.5H76.5V78.5H77.5ZM116.25 78.5V79.5H117.25V78.5H116.25ZM116.25 39.75H117.25V38.75H116.25V39.75ZM77.5 39.75H76.5V40.75H77.5V39.75ZM116.25 0H77.5V2H116.25V0ZM155 0H116.25V2H155V0ZM156 39.75V1H154V39.75H156ZM156 78.5V39.75H154V78.5H156ZM156 117.25V78.5H154V117.25H156ZM116.25 118.25H155V116.25H116.25V118.25ZM116.25 116.25H77.5V118.25H116.25V116.25ZM78.5 117.25V78.5H76.5V117.25H78.5ZM77.5 79.5H116.25V77.5H77.5V79.5ZM115.25 39.75V78.5H117.25V39.75H115.25ZM77.5 40.75H116.25V38.75H77.5V40.75ZM76.5 1V39.75H78.5V1H76.5Z" fill="#C778DD" mask="url(#path-3-outside-2_64_1298)"/></svg></div>
            <img src={heroImg}/>
            <div className='hdots'><svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="#ABB2BF"/><circle cx="22" cy="2" r="2" fill="#ABB2BF"/><circle cx="42" cy="2" r="2" fill="#ABB2BF"/><circle cx="62" cy="2" r="2" fill="#ABB2BF"/><circle cx="82" cy="2" r="2" fill="#ABB2BF"/><circle cx="2" cy="22" r="2" fill="#ABB2BF"/><circle cx="22" cy="22" r="2" fill="#ABB2BF"/><circle cx="42" cy="22" r="2" fill="#ABB2BF"/><circle cx="62" cy="22" r="2" fill="#ABB2BF"/><circle cx="82" cy="22" r="2" fill="#ABB2BF"/><circle cx="2" cy="42" r="2" fill="#ABB2BF"/><circle cx="22" cy="42" r="2" fill="#ABB2BF"/><circle cx="42" cy="42" r="2" fill="#ABB2BF"/><circle cx="62" cy="42" r="2" fill="#ABB2BF"/><circle cx="82" cy="42" r="2" fill="#ABB2BF"/><circle cx="2" cy="62" r="2" fill="#ABB2BF"/><circle cx="22" cy="62" r="2" fill="#ABB2BF"/><circle cx="42" cy="62" r="2" fill="#ABB2BF"/><circle cx="62" cy="62" r="2" fill="#ABB2BF"/><circle cx="82" cy="62" r="2" fill="#ABB2BF"/><circle cx="2" cy="82" r="2" fill="#ABB2BF"/><circle cx="22" cy="82" r="2" fill="#ABB2BF"/><circle cx="42" cy="82" r="2" fill="#ABB2BF"/><circle cx="62" cy="82" r="2" fill="#ABB2BF"/><circle cx="82" cy="82" r="2" fill="#ABB2BF"/></svg>
          </div>
          </div>
        </section>

        <header className='qq'>
        <svg className='qu_s' width="32" height="19" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="41.472" height="28.704" fill="#282C33"/><path d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z" fill="#ABB2BF"/></svg>
        <svg className='qu_e' width="32" height="19" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="41.472" height="28.704" fill="#282C33"/><path d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z" fill="#ABB2BF"/></svg>
          <div className='quote'>
            <p>Programmer: A machine that turns coffee into code.</p>
          </div>
          <div className='quoteQ'><p> – Anonymous</p></div>
        </header>

        <div className='sideBox'>
          <svg width="82" height="91" viewBox="0 0 82 91" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="90" height="90" stroke="#ABB2BF"/></svg>
        </div>

        <div className='projects'>
          <div className='heading'>
            <div>
              <h1><span>#</span>projects</h1> &nbsp;
              <hr/>
            </div>
            <a href='/projects'>View all ~~&#62; </a>
          </div>
          <div className='project_div'>
            <div className='p_d'>
              <div className='img'>
                <img src={carbnb}/>
              </div>
              <div className='lang'>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>Bootstrap</p>
                <p>Jquery</p>
              </div>
              <div className='p_des'>
                <h2>Carbnb</h2>
                <p>A carbnb redesign</p>
                <div> 
                  <button>Live &#60;~&#62;</button>
                  <button>Github &#62;=</button>
                </div>
              </div>
            </div>
            <div className='p_d'>
              <div className='img'>
                <img src={carbnb}/>
              </div>
              <div className='lang'>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className='p_des'>
                <h2>Carbnb</h2>
                <p>A carbnb redesign</p>
                <div> 
                  <button>Live &#60;~&#62;</button>
                  <button>Github &#62;=</button>
                </div>
              </div>
            </div>
            <div className='p_d'>
              <div className='img'>
                <img src={carbnb}/>
              </div>
              <div className='lang'>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className='p_des'>
                <h2>Carbnb</h2>
                <p>A carbnb redesign</p>
                <div> 
                  <button>Live &#60;~&#62;</button>
                  <button>Github &#62;=</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg className='box' width="68" height="155" viewBox="0 0 68 155" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="154" height="154" stroke="#ABB2BF"/></svg>


        <div className='projects skills'>
          <div className='heading'>
            <div>
              <h1><span>#</span>skills</h1> &nbsp;
              <hr/>
            </div>
            {/* <a href='/projects'>View all ~~&#62; </a> */}
          </div>
          <div className='project_div skill_div'>
            <div className='pattern'>
              <svg width="349" height="283" viewBox="0 0 349 283" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="40" r="2" fill="#ABB2BF"/><circle cx="16.75" cy="40" r="2" fill="#ABB2BF"/><circle cx="31.5" cy="40" r="2" fill="#ABB2BF"/><circle cx="46.25" cy="40" r="2" fill="#ABB2BF"/><circle cx="61" cy="40" r="2" fill="#ABB2BF"/><circle cx="2" cy="54.75" r="2" fill="#ABB2BF"/><circle cx="16.75" cy="54.75" r="2" fill="#ABB2BF"/><circle cx="31.5" cy="54.75" r="2" fill="#ABB2BF"/><circle cx="46.25" cy="54.75" r="2" fill="#ABB2BF"/><circle cx="61" cy="54.75" r="2" fill="#ABB2BF"/><circle cx="2" cy="69.5" r="2" fill="#ABB2BF"/><circle cx="16.75" cy="69.5" r="2" fill="#ABB2BF"/><circle cx="31.5" cy="69.5" r="2" fill="#ABB2BF"/><circle cx="46.25" cy="69.5" r="2" fill="#ABB2BF"/><circle cx="61" cy="69.5" r="2" fill="#ABB2BF"/><circle cx="2" cy="84.25" r="2" fill="#ABB2BF"/><circle cx="16.75" cy="84.25" r="2" fill="#ABB2BF"/><circle cx="31.5" cy="84.25" r="2" fill="#ABB2BF"/><circle cx="46.25" cy="84.25" r="2" fill="#ABB2BF"/><circle cx="61" cy="84.25" r="2" fill="#ABB2BF"/><circle cx="2" cy="99" r="2" fill="#ABB2BF"/><circle cx="16.75" cy="99" r="2" fill="#ABB2BF"/><circle cx="31.5" cy="99" r="2" fill="#ABB2BF"/><circle cx="46.25" cy="99" r="2" fill="#ABB2BF"/><circle cx="61" cy="99" r="2" fill="#ABB2BF"/><circle cx="179" cy="145" r="2" fill="#ABB2BF"/><circle cx="193.75" cy="145" r="2" fill="#ABB2BF"/><circle cx="208.5" cy="145" r="2" fill="#ABB2BF"/><circle cx="223.25" cy="145" r="2" fill="#ABB2BF"/><circle cx="238" cy="145" r="2" fill="#ABB2BF"/><circle cx="179" cy="159.75" r="2" fill="#ABB2BF"/><circle cx="193.75" cy="159.75" r="2" fill="#ABB2BF"/><circle cx="208.5" cy="159.75" r="2" fill="#ABB2BF"/><circle cx="223.25" cy="159.75" r="2" fill="#ABB2BF"/><circle cx="238" cy="159.75" r="2" fill="#ABB2BF"/><circle cx="179" cy="174.5" r="2" fill="#ABB2BF"/><circle cx="193.75" cy="174.5" r="2" fill="#ABB2BF"/><circle cx="208.5" cy="174.5" r="2" fill="#ABB2BF"/><circle cx="223.25" cy="174.5" r="2" fill="#ABB2BF"/><circle cx="238" cy="174.5" r="2" fill="#ABB2BF"/><circle cx="179" cy="189.25" r="2" fill="#ABB2BF"/><circle cx="193.75" cy="189.25" r="2" fill="#ABB2BF"/><circle cx="208.5" cy="189.25" r="2" fill="#ABB2BF"/><circle cx="223.25" cy="189.25" r="2" fill="#ABB2BF"/><circle cx="238" cy="189.25" r="2" fill="#ABB2BF"/><circle cx="179" cy="204" r="2" fill="#ABB2BF"/><circle cx="193.75" cy="204" r="2" fill="#ABB2BF"/><circle cx="208.5" cy="204" r="2" fill="#ABB2BF"/><circle cx="223.25" cy="204" r="2" fill="#ABB2BF"/><circle cx="238" cy="204" r="2" fill="#ABB2BF"/><rect x="297.5" y="193.5" width="51" height="51" stroke="#ABB2BF"/><rect x="227.5" y="0.5" width="85" height="85" stroke="#ABB2BF"/><mask id="path-53-inside-1_29_371" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.5 169H99.75H128V197.25V225.5V253.75H99.75H71.5V225.5H99.75V197.25H71.5V169Z"/></mask><path d="M71.5 169V168H70.5V169H71.5ZM128 169H129V168H128V169ZM128 253.75V254.75H129V253.75H128ZM71.5 253.75H70.5V254.75H71.5V253.75ZM71.5 225.5V224.5H70.5V225.5H71.5ZM99.75 225.5V226.5H100.75V225.5H99.75ZM99.75 197.25H100.75V196.25H99.75V197.25ZM71.5 197.25H70.5V198.25H71.5V197.25ZM99.75 168H71.5V170H99.75V168ZM128 168H99.75V170H128V168ZM129 197.25V169H127V197.25H129ZM129 225.5V197.25H127V225.5H129ZM129 253.75V225.5H127V253.75H129ZM99.75 254.75H128V252.75H99.75V254.75ZM99.75 252.75H71.5V254.75H99.75V252.75ZM72.5 253.75V225.5H70.5V253.75H72.5ZM71.5 226.5H99.75V224.5H71.5V226.5ZM98.75 197.25V225.5H100.75V197.25H98.75ZM71.5 198.25H99.75V196.25H71.5V198.25ZM70.5 169V197.25H72.5V169H70.5Z" fill="#C778DD" mask="url(#path-53-inside-1_29_371)"/><mask id="path-55-outside-2_29_371" maskUnits="userSpaceOnUse" x="14" y="196.25" width="59" height="87" fill="black"><rect fill="white" x="14" y="196.25" width="59" height="87"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 197.25H43.25H71.5V225.5H43.25V253.75H71.5V282H43.25H15V253.75V225.5V197.25Z"/></mask><path d="M15 197.25V196.25H14V197.25H15ZM71.5 197.25H72.5V196.25H71.5V197.25ZM71.5 225.5V226.5H72.5V225.5H71.5ZM43.25 225.5V224.5H42.25V225.5H43.25ZM43.25 253.75H42.25V254.75H43.25V253.75ZM71.5 253.75H72.5V252.75H71.5V253.75ZM71.5 282V283H72.5V282H71.5ZM15 282H14V283H15V282ZM43.25 196.25H15V198.25H43.25V196.25ZM71.5 196.25H43.25V198.25H71.5V196.25ZM72.5 225.5V197.25H70.5V225.5H72.5ZM43.25 226.5H71.5V224.5H43.25V226.5ZM44.25 253.75V225.5H42.25V253.75H44.25ZM43.25 254.75H71.5V252.75H43.25V254.75ZM70.5 253.75V282H72.5V253.75H70.5ZM71.5 281H43.25V283H71.5V281ZM15 283H43.25V281H15V283ZM14 253.75V282H16V253.75H14ZM14 225.5V253.75H16V225.5H14ZM14 197.25V225.5H16V197.25H14Z" fill="#C778DD" mask="url(#path-55-outside-2_29_371)"/></svg>
            </div>
            <div className='sk_div'>
              <div className='s_d'>
                <header><h3>Languages</h3></header>
                <div className='l_d'>
                  <p>HTML</p>
                  <p>Javascript</p>
                  <p>CSS</p>
                </div>
              </div>

              <div className='s_d'>
                <header><h3>Frameworks</h3></header>
                <div className='l_d'>
                  <p>React</p>
                  <p>Bootstrap</p>
                  <p>SCSS</p>
                  <p>EJS</p>
                </div>
              </div>

              <div className='s_d'>
                <header><h3>Tools</h3></header>
                <div className='l_d'>
                  <p>VSCode</p>
                  <p>Figma</p>
                  <p>Git</p>
                  <p>Font awesome</p>
                  <p>Github</p>
                  <p>Gitlab</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='projects abt-me'>
          <div className='heading'>
            <div>
              <h1><span>#</span>about-me</h1> &nbsp;
              <hr/>
            </div>
          </div>
          <div className='abt-div'>
            <div className='abt-txt'>
              <p>
              Hi, I'm Marvellous, <br/><br/> I'm a front-end developer based in Ibadan, Nigeria. I've dedicated over a year to crafting responsive websites from scratch, focusing on delivering modern and user-friendly web experiences. I'm passionate about turning creativity and expertise into impactful online solutions, helping clients establish their digital presence effectively. <br/><br/>  In addition to web development, I serve as a web instructor, sharing my knowledge to empower  others in this dynamic field. I'm committed to continuous learning and staying updated with the  latest technologies and frameworks to deliver innovative solutions that meet current industry  standards.
              </p>
              <button>Read more -&#62;</button>
            </div>
            <div className='abt-img'>
              <img src={abtImg}/>
            </div>
          </div>
        </div>




    </div>
)
}

export default Home