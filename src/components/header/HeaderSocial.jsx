import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className="headerSocial">
        <a href="https://www.linkedin.com/" ><BsLinkedin /></a>
        <a href="https://www.github.com/" > <FaGithub /></a>
        <a href="https://www.dribbble.com/" > <FiDribbble /></a>
    </div>
  )
}

export default HeaderSocial