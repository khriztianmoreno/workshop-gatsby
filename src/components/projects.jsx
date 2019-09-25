import React from 'react'

import ProjectCard from './project-card'
import useContentfulProjects from '../hooks/use-contentful-projects'

const Projects = () => {
  const projects = useContentfulProjects()
  console.log("TCL: Projects -> projects", projects)

  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {
          projects.map((project, idx) => (<ProjectCard key={idx} {...project} />))
        }
      </ul>
    </div>
  )
}

export default Projects
