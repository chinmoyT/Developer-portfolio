import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub,  FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiTypescript} from "react-icons/si";
import { FaJava } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaAws } from "react-icons/fa";
import { DiMysql } from "react-icons/di";


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
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        SQL : <DiMysql/>,
        Java: <FaJava />,
        TypeScript: <SiTypescript />,
        AWS: <FaAws />
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
