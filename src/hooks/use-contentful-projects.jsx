import { graphql, useStaticQuery } from 'gatsby'

const useContentfulProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects {
        edges {
          node {
            projects {
              ...contentfulProject
            }
          }
        }
      }
    }

    fragment contentfulProject on ContentfulProjectItem {
      title
      about
      link
      background
    }
  `)

  if (data && data.allContentfulProjects) {
    return data.allContentfulProjects.edges[0].node.projects
  }

  return []
}

export default useContentfulProjects
