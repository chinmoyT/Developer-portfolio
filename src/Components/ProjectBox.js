import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    NewsXDesc : "A website that fetches the news API and shows news. I allows different categories of news like sports, business, political.",
    NewsXGithub : "https://github.com/chinmoyT/News-Website",
    NewXWebsite : "",

    BookMyMovieDesc : "A website to book movies. It has an user login to book movies of their choices. And a admin login to add new movies and confirm the bookings done by the user.",
    BookMyMovieGithub : "https://github.com/chinmoyT/BookMyMovie",
    BookMyMovieWebsite : "https://mern-stack-frontend-pi.vercel.app/",

    CryptoExchangeDesc:"A comprehensive crypto exchange platform that shows the realtime analaysis of 50+ crypto coins.",
    CryptoExchangeGithub:"https://github.com/chinmoyT/CoinExchange",
    CryptoExchangeWebsite:"https://cryptoexchange-beta.vercel.app/",

    CSVImporterDesc :"An importer for goofle sheets that allows to import any csv file with drag and drop. It has a feature to filter fata that the user wants to import.",
    CSVImporterGithub: "https://github.com/chinmoyT/CSV-Importer",
    CSVImporterWebsite:"",

    SpotifyBackendDesc:"Created REST API and all services keeping in mind the backend of a music streaming platform.",
    SpotifyBackendGithub: "https://github.com/chinmoyT/Spotify-backend",
    SpotifyBackendWebsite:""
    
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
  if(desc[projectName + 'Website']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} style={{display:show}} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
