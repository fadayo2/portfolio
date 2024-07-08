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
        <svg className='qu_s' width="32" height="19" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="41.472" height="28.704" fill="whitesmoke"/><path d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z" fill="#ABB2BF"/></svg>
        <svg className='qu_e' width="32" height="19" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="41.472" height="28.704" fill="whitesmoke"/><path d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z" fill="#ABB2BF"/></svg>
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
        <svg className='box2' width="78" height="155" viewBox="0 0 78 155" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-76.5" y="0.5" width="154" height="154" stroke="#ABB2BF"/></svg>
        </div>
        <svg className='dotbox' width="80" height="103" viewBox="0 0 80 103" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="#ABB2BF"/><circle cx="26.75" cy="2" r="2" fill="#ABB2BF"/><circle cx="51.5" cy="2" r="2" fill="#ABB2BF"/><circle cx="76.25" cy="2" r="2" fill="#ABB2BF"/><circle cx="2" cy="26.75" r="2" fill="#ABB2BF"/><circle cx="26.75" cy="26.75" r="2" fill="#ABB2BF"/><circle cx="51.5" cy="26.75" r="2" fill="#ABB2BF"/><circle cx="76.25" cy="26.75" r="2" fill="#ABB2BF"/><circle cx="2" cy="51.5" r="2" fill="#ABB2BF"/><circle cx="26.75" cy="51.5" r="2" fill="#ABB2BF"/><circle cx="51.5" cy="51.5" r="2" fill="#ABB2BF"/><circle cx="76.25" cy="51.5" r="2" fill="#ABB2BF"/><circle cx="2" cy="76.25" r="2" fill="#ABB2BF"/><circle cx="26.75" cy="76.25" r="2" fill="#ABB2BF"/><circle cx="51.5" cy="76.25" r="2" fill="#ABB2BF"/><circle cx="76.25" cy="76.25" r="2" fill="#ABB2BF"/><circle cx="2" cy="101" r="2" fill="#ABB2BF"/><circle cx="26.75" cy="101" r="2" fill="#ABB2BF"/><circle cx="51.5" cy="101" r="2" fill="#ABB2BF"/><circle cx="76.25" cy="101" r="2" fill="#ABB2BF"/></svg>

        <div className='projects contact'>
          <div className='heading'>
            <div>
              <h1><span>#</span>contacts</h1> &nbsp;
              <hr/>
            </div>
          </div>
          <div className='abt-div'>
            <div className='abt-txt'>
              <p>
                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
              </p>
            </div>
            <div className='contact-div'>
              <h3>Message me here</h3> <br/>
              <p> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z" fill="#ABB2BF"/></svg> fadunmiyemarvellous@gmail.com</p>
            </div>
          </div>
          <svg className='dot2' width="52" height="103" viewBox="0 0 52 103" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0.5" cy="2" r="2" fill="#ABB2BF"/><circle cx="25.25" cy="2" r="2" fill="#ABB2BF"/><circle cx="50" cy="2" r="2" fill="#ABB2BF"/><circle cx="0.5" cy="26.75" r="2" fill="#ABB2BF"/><circle cx="25.25" cy="26.75" r="2" fill="#ABB2BF"/><circle cx="50" cy="26.75" r="2" fill="#ABB2BF"/><circle cx="0.5" cy="51.5" r="2" fill="#ABB2BF"/><circle cx="25.25" cy="51.5" r="2" fill="#ABB2BF"/><circle cx="50" cy="51.5" r="2" fill="#ABB2BF"/><circle cx="0.5" cy="76.25" r="2" fill="#ABB2BF"/><circle cx="25.25" cy="76.25" r="2" fill="#ABB2BF"/><circle cx="50" cy="76.25" r="2" fill="#ABB2BF"/><circle cx="0.5" cy="101" r="2" fill="#ABB2BF"/><circle cx="25.25" cy="101" r="2" fill="#ABB2BF"/><circle cx="50" cy="101" r="2" fill="#ABB2BF"/></svg>
        </div>

        <footer>
          <div className='f_1'>
            <div className='logo'><svg width="16" height="17" viewBox="0 0 16 17" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="black"/>
              </svg> &nbsp;
              <p>Marvellous</p>
            </div>
              <p className='gm'>fadunmiyemarvellous@gmail.com</p>
              <p>Web instructor and front-end developer</p>
          </div>

          <div className='f_2'>
            <h3>Media</h3>
            <div>
              <a href='https://github.com/fadayo2'><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 0C4.69875 0 0 4.58819 0 10.2529C0 14.7899 3.00562 18.6219 7.17937 19.9804C7.70437 20.0701 7.90125 19.7625 7.90125 19.4934C7.90125 19.2499 7.88813 18.4425 7.88813 17.5838C5.25 18.058 4.5675 16.9558 4.3575 16.3791C4.23938 16.0843 3.7275 15.1743 3.28125 14.9308C2.91375 14.7386 2.38875 14.2644 3.26813 14.2516C4.095 14.2388 4.68563 14.9949 4.8825 15.3025C5.8275 16.8533 7.33688 16.4175 7.94063 16.1484C8.0325 15.4819 8.30812 15.0334 8.61 14.777C6.27375 14.5207 3.8325 13.6364 3.8325 9.71466C3.8325 8.59965 4.23938 7.67689 4.90875 6.95918C4.80375 6.70286 4.43625 5.65193 5.01375 4.24215C5.01375 4.24215 5.89313 3.97301 7.90125 5.29308C8.74125 5.06239 9.63375 4.94704 10.5263 4.94704C11.4188 4.94704 12.3113 5.06239 13.1513 5.29308C15.1594 3.9602 16.0387 4.24215 16.0387 4.24215C16.6163 5.65193 16.2488 6.70286 16.1438 6.95918C16.8131 7.67689 17.22 8.58684 17.22 9.71466C17.22 13.6492 14.7656 14.5207 12.4294 14.777C12.81 15.0975 13.1381 15.7126 13.1381 16.6738C13.1381 18.0452 13.125 19.1474 13.125 19.4934C13.125 19.7625 13.3219 20.0829 13.8469 19.9804C15.9314 19.2935 17.7428 17.9854 19.026 16.2403C20.3092 14.4953 20.9996 12.4012 21 10.2529C21 4.58819 16.3013 0 10.5 0Z" fill="#ABB2BF"/></svg></a>
              <a href=''><svg width="21" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z" fill="#ABB2BF"/></svg></a>
              <a href=''><svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2249 26C19.9045 26 24.6526 18.6883 24.6526 12.3587C24.6526 12.1541 24.6526 11.9466 24.6439 11.742C25.5683 11.0617 26.3661 10.2194 27 9.25459C26.1365 9.64165 25.2215 9.89676 24.2846 10.0116C25.2715 9.41189 26.0106 8.46827 26.3646 7.35615C25.4374 7.91461 24.4226 8.30664 23.3646 8.51509C22.6533 7.74493 21.712 7.23473 20.6866 7.0635C19.6612 6.89228 18.6089 7.06959 17.6927 7.56797C16.7764 8.06635 16.0474 8.85799 15.6185 9.82026C15.1896 10.7825 15.0848 11.8617 15.3203 12.8907C13.444 12.795 11.6084 12.2995 9.93262 11.4362C8.25682 10.5728 6.77823 9.36104 5.59275 7.87935C4.99093 8.93611 4.80726 10.1861 5.07905 11.3756C5.35085 12.565 6.05772 13.6047 7.05612 14.2835C6.30796 14.2576 5.57625 14.0534 4.92 13.6872V13.753C4.92129 14.86 5.2985 15.9326 5.98788 16.7895C6.67726 17.6464 7.63651 18.2351 8.7035 18.4559C8.2985 18.5694 7.88014 18.6259 7.46006 18.624C7.16391 18.6249 6.86836 18.597 6.57744 18.5407C6.87901 19.4937 7.46621 20.3269 8.25679 20.9236C9.04738 21.5203 10.0018 21.8507 10.9863 21.8685C9.3138 23.2039 7.24789 23.9282 5.12125 23.9247C4.74652 23.9263 4.37206 23.9044 4 23.859C6.15843 25.258 8.66512 26.0008 11.2249 26Z" fill="#ABB2BF"/></svg></a>
            </div>
          </div>
        </footer>

        <div className='copy'>
          © Copyright 2024. Made by Marvellous
        </div>

    </div>
)
}

export default Home