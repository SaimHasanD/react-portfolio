import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="aboutContent">
          <div className="aboutCards">
            <article className="aboutCard">
              <FaAward className='aboutIcon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>       

          <article className="aboutCard">
            <FiUsers className='aboutIcon' />
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>

          <article className="aboutCard">
            <VscFolderLibrary className='aboutIcon' />
            <h5>Projects</h5>
            <small>80+ Completed Projects</small>
          </article>
          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non enim blanditiis voluptatibus maiores ipsam sunt aspernatur, eligendi accusamus consectetur tempore ea iste ducimus expedita rem eum! Nam nulla vitae labore.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About