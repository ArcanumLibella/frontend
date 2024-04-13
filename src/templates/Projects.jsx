import React from "react";
import { ProjectsLayout } from "../components/layouts";
import { ProjectCard } from "../components/organisms/ProjectCard";

const Projects = ({ data }) => {
  // const { projects, tags } = props.pageContext
  console.log("data : ", data)

  return (
    <ProjectsLayout tags={tags}>
      {projects.map((project) => (
          <ProjectCard
            key={project.node.id}
            title={project.node.title}
            categories={project.node.categories}
            uri={project.node.uri}
            image={project.node.featuredImage}
          />
      ))}
    </ProjectsLayout>
  );
};

export default Projects;
