import React from 'react';
import Lottie from  "lottie-react";
import HappyHacker from '../LottieFiles/happy-hacker.json'
import Profile from '../images/profile.png'
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/cartoon.png'

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>CHINMOY THAKURIA</b></h1>
          <Typed/>   
        </div>

        {/* <Lottie 
          className="illustration" 
          animationData={HappyHacker} 
          loop={true} 
        /> */}
        <img 
          className="illustration" 
          src={Profile} 
          alt="My profile picture" 
          style={{
            borderRadius: '50%',
            // border: '2px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.2), 0 0 20px 10px rgba(0, 0, 0, 0.5) inset'
          }}
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
           Hello Everyone I am Chinmoy Thakuria, I am from Assam, India. 
            I am a MERN stack developer. i like to develop projects that challenges me to 
            upgrade my skills. <br /><br />
            I am fluent in <b>Java</b> and am working on a few 
            projects in <b>MERN</b> stack.<br />
            I plan to learn Cloud Deployment platforms like <b>AWS</b>, <b>Azure</b> and <b>GCP</b> in the near future. <br /><br />
 
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home