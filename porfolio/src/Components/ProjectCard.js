import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

export const ProjectCard = ({ title, images, text }) => {
  const [active, setActive] = useState(false);

  const openProjectDiv = () => {
    setActive((prev) => !prev);
  };

  return active ? (
    <ProjectModal title={title} setActive={setActive} images={images} text={text}/>
  ) : (
    <div className="projectCard" onClick={openProjectDiv}>
      <div className="projectImageDiv">
        <img src={images[0]} className="projectImageMain" alt="projectImage"/>        
      </div>
      <div className="projectTextWrap">
        <h3 className="projectTitle">{text["name"]}</h3>
      </div>
    </div>
  );
};
