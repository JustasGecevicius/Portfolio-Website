import { ProjectCard } from "./ProjectCard";

export const ProjectCardDisplayer = ({
  projects,
  textObject,
  imagesObject,
}) => {
    //displaying all of the available projects
  return (
    <>
      {projects.map((elem, index) => {
        return (
          <ProjectCard
            key={index}
            title={elem}
            images={imagesObject[elem]}
            text={textObject[elem]}
          />
        );
      })}
    </>
  );
};
