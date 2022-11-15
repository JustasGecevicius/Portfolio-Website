import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { ProjectsObject } from "./ProjectsObject";

export const ProjectCard = ({ title }) => {
  const [active, setActive] = useState(false);

  const openProjectDiv = (e) => {
    active ? setActive(false) : setActive(true);
  };

  let Images = ProjectsObject();
  console.log(Images);

  return active ? (
    <ProjectModal title={title} setActive={setActive}/>
  ) : (
    <div className="projectCard" onClick={openProjectDiv}>
      <div className="projectImageDiv">
        {Object.keys(Images[title]["pictures"]).map((elem, index) => {
          return index === 0 ? (
            <img
              key={index}
              className="projectImageMain"
              src={Images[title]["pictures"][elem]}
              alt="ProjectImage"
            />
          ) : (
            <img
              key={index}
              className="projectImage"
              src={Images[title]["pictures"][elem]}
              alt="ProjectImage"
            />
          );
        })}
      </div>
      <div className="projectTextWrap">
        <h3 className="projectTitle">{Images[title]["name"]}</h3>
        <div className="projectAdditionalTextWrap">
          <p className="projectDescription">
            {Images[title]["description"]["p"]}
          </p>
          <ul className="technologiesUl">
            Technologies Used: <br />
            {Object.keys(Images[title]["description"]["technologies"]).map(
              (elem, index) => {
                return (
                  <li key={index} className="technologiesLi">
                    {Images[title]["description"]["technologies"][elem]}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
