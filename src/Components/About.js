import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Let me <b>Introduce</b> myself!</h1>
          <p>
            Hi, my name is <b>Chinmoy Thakuria</b> and I am from Assam, India.
            I'm a <b>Full Stack Developer</b>. <br/><br/>
            
            I love to create projects that are scalable, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> for collaborations. Feel free to connect with me with the links in the footer.<br/>
            
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='SQL' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Java' />
        <Skills skill='HTML' />
        <Skills skill='TypeScript' />
        <Skills skill='AWS' />
      </div>
    </>
  )
}

export default About