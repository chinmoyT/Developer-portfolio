import React from 'react';
import ProjectBox from './ProjectBox';
import Spotify from '../images/spotify.png';
import crypto from '../images/crypto.PNG'
import book from '../images/bookmymovie.PNG'
import CSVImporter from '../images/csv.png'
import newsx from '../images/newsx.PNG'
import TextBot from '../images/Screenshot.PNG'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={crypto} projectName="CryptoExchange" />
        <ProjectBox projectPhoto={book} projectName="BookMyMovie" />
        <ProjectBox projectPhoto={CSVImporter} projectName="CSVImporter" />
        <ProjectBox projectPhoto={TextBot} projectName="TextBot" />
      </div>

    </div>
  )
}

export default Projects
