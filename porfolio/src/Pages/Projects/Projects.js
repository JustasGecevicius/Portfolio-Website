import { ProjectCard } from "../../Components/ProjectCard";
import "../SCSS/Projects.css";

export const Projects = () => {
  return (
  <div className="projects">
    <h2 className="pageTitle"> Projects </h2>
    <div className="projectsDiv">
        <ProjectCard title = "Ecommerce"/>
        <ProjectCard title = "Calc"/>
        <ProjectCard title = "AdminDash"/>
        <ProjectCard title = "Etch"/>
        <ProjectCard title = "MemoryGame"/>
        <ProjectCard title = "Restaurant"/>
        <ProjectCard title = "TTT"/>
        <ProjectCard title = "Todo"/>

    </div>
  </div>
  )
};
