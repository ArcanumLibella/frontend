import React from "react";
import { graphql } from 'gatsby';
import { ProjectLayout } from "../../components/layouts";

const ProjectPage = ({ data }) => {
  const { 
    title,
    description,
    slug,
    year,
    technos,
    links
  } = data.strapiProject

  return (
    <ProjectLayout
      title={title}
      description={description}
      slug={slug}
      year={year}
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
      technos {
        names
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
