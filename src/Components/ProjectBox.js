import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {

    BookMyMovieDesc : "A website to book movies. It has an user login to book movies of their choices. And a admin login to add new movies and confirm the bookings done by the user.",
    BookMyMovieGithub : "https://github.com/chinmoyT/BookMyMovie",
    BookMyMovieWebsite : "https://book-my-movie-frontend.vercel.app/",

    CryptoExchangeDesc:"A comprehensive crypto exchange platform that shows the realtime analaysis of 50+ crypto coins.",
    CryptoExchangeGithub:"https://github.com/chinmoyT/CoinExchange",
    CryptoExchangeWebsite:"https://cryptoexchange-beta.vercel.app/",

    CSVImporterDesc :"An importer for goofle sheets that allows to import any csv file with drag and drop. It has a feature to filter fata that the user wants to import.",
    CSVImporterGithub: "https://github.com/chinmoyT/CSV-Importer",
    CSVImporterWebsite:"",

    TextBotDesc: "A powerful AI assistant, built on Google AI's innovative Gemini technology, stands ready to assist you.  Simply pose your questions, and receive informative answers within seconds.",
    TextBotGithub: "https://github.com/chinmoyT/TexttBot",
    TextBotWebsite: "https://textt-bot.vercel.app/"
    
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
