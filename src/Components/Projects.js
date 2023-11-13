import React from 'react';
import ProjectBox from './ProjectBox';
import Spotify from '../images/spotify.png';
import crypto from '../images/crypto.PNG'
import book from '../images/bookmymovie.PNG'
import CSVImporter from '../images/csv.png'
import newsx from '../images/newsx.PNG'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={crypto} projectName="CryptoExchange" />
        <ProjectBox projectPhoto={book} projectName="BookMyMovie" />
        <ProjectBox projectPhoto={CSVImporter} projectName="CSVImporter" />
        <ProjectBox projectPhoto={newsx} projectName="NewsX" />
        <ProjectBox projectPhoto={Spotify} projectName="SpotifyBackend" />
      </div>

    </div>
  )
}

export default Projects