import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container serviceContainer">
        {/* ---------------------------------------UI/UX  DESIGN------------------------------------- */}
        <article className="service">
          <div className="serviceHead">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="serviceList">
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* ---------------------------------------WEB DEVELOPMENT------------------------------------- */}
        <article className="service">
          <div className="serviceHead">
            <h3>Web Development</h3>
          </div>
          <ul className="serviceList">
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* ---------------------------------------CONTAIN CREATION------------------------------------ */}
        <article className="service">
          <div className="serviceHead">
            <h3>Contain Creation</h3>
          </div>
          <ul className="serviceList">
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serviceListIcon' />
              <p>Lorem ipsum dolor sit, amet  adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services