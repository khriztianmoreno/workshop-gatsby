import React from 'react'

const ProjectCard = ({ link, title, about, background }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    style={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      color: `white`,
      background: background || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
    }}
  >
    <p>
      {title}
    </p>
    <p>{about}</p>
  </a>
)

export default ProjectCard
