import React from "react";
import { graphql } from 'gatsby';
import { ProjectLayout } from "../../components/layouts";

const ProjectPage = ({ data }) => {
  const { 
    title,
    description,
    slug,
    year,
    preview,
    technos,
    links
  } = data.strapiProject

  console.log("preview : ", preview)

  return (
    <ProjectLayout
      title={title}
      description={description}
      slug={slug}
      year={year}
      preview={preview}
      technos={technos}
      links={links}
    />
  );
};

export const query = graphql`
  query ($id: String) {
    strapiProject(id: {eq: $id}) {
      title
      description
      slug
      year
      preview {
        id
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
            )
          }
        }
        alternativeText
        width
        height
      }
      technos {
        name
        slug
      }
      links {
        name
        url
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.strapiProject.title} | FionaRx</title>

export default ProjectPage;
