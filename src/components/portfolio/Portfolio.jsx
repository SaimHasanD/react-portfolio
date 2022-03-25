import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

/*-----------------------------Create Object-----------------------------*/

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: "https://github.com",
    demo: 'https://dribbble.com/shots/17714981-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Orion UI kit - Charts data & infographics in Figma',
    github: "https://github.com",
    demo: 'https://dribbble.com/shots/17774034-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Orion UI kit - Charts templates & data in Figma',
    github: "https://github.com",
    demo: 'https://dribbble.com/shots/17774049-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Orion UI kit - Charts templates & dashboard in Figma',
    github: "https://github.com",
    demo: 'https://dribbble.com/shots/17774084-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: "https://github.com",
    demo: 'https://dribbble.com/shots/17661068-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Eclipse - Figma dashboard UI kit for templates design web apps',
    github: "https://github.com",
    demo: 'https://dribbble.com/shots/17610570-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolioItem">
                <div className="portfolioItemImage">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolioItemCTA">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio