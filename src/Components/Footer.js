import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Made by Chinmoy Thakuria</h4>
      <div className='footerLinks'>
        <a href="https://github.com/chinmoyT" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/chinmoy-thakuria/" target='_blank'><FaLinkedin/></a>
        <a href="mailto:chinmoythakuria20@gmail.com" rel="noopener noreferrer"><GrMail/></a>
        <a href="https://leetcode.com/chinmoy201/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer