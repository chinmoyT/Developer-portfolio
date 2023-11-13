import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiVercel, SiTypescript} from "react-icons/si";
import { FaJava } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';


const Skills = ({skill}) => {
    const icon = {
        HTML: <AiFillHtml5 />,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Java: <FaJava />,
        TypeScript: <SiTypescript />
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
