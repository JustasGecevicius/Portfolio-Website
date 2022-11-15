import { Link } from "react-router-dom";
import { ProjectsObject } from "../../Components/ProjectsObject";
import "../SCSS/About.css";


export const About = () => {

ProjectsObject();

  return (
    <div className="about">
      <div className="textWrapperAbout">
        <h2>About Me</h2>
        <p>
          I am a Dedicated and Inquisitive Front-end Developer. Over the past
          year of learning Web Development I have made great progress. With the
          expert guidance of several Software and Front-end Development
          professionals I have managed to understand the market standards for
          writing clean and professional code. For all of my skills click Resume
          and for all my latest projects click Projects.
        </p>
        <div className="aboutButtonsDiv">
        <button type="button" className="resume">Resume</button>
        <Link to="/projects"><button type="button" className="Projects">Projects</button></Link>
      </div>
      </div>
    </div>
  );
};
