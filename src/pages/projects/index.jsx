import React from "react";
import { graphql } from 'gatsby';
import { ProjectsLayout } from "../../components/layouts";
import { ProjectCard } from "../../components/organisms/ProjectCard";

const ProjectsPage = ({ data }) => {
  const categories = data.allStrapiCategory.edges;

  return (
    <ProjectsLayout categories={categories}>
      {data.allStrapiProject.edges.map((project) => (
          <ProjectCard
            key={project.node.slug}
            title={project.node.title}
            missions={project.node.missions}
            slug={project.node.slug}
            // thumbnail={project.node.thumbnail}
          />
      ))}
    </ProjectsLayout>
  );
};

export const query = graphql`
  query {
    allStrapiProject {
      edges {
        node {
          title
          slug
          missions {
            name
            slug
          }
        }
      }
    }
    allStrapiCategory {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`

export const Head = () => <title>Projets | FionaRx</title>

export default ProjectsPage;
