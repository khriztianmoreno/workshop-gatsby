import React from "react"

import ProjectCard from "../components/project-card"

export default {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} background={bg}>
      {children}
    </ProjectCard>
  ),
}
