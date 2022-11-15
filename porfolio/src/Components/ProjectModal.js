import { ProjectsObject } from "./ProjectsObject";

export const ProjectModal = ({ title, setActive }) => {
  let Images = ProjectsObject();

  return (
    <div className="projectModal">
      <div className="overlay"></div>
      <div className="modal">
        <div className="modalImageDiv">
          {Object.keys(Images[title]["pictures"]).map((elem, index) => {
            return (
              <img
                key={index}
                className="modalImage"
                src={Images[title]["pictures"][elem]}
                alt="ProjectImage"
              />
            );
          })}
        </div>
        <div className="modalTextWrap">
          <div class="modalTitleWrap">
            <h3 className="modalTitle">{Images[title]["name"]}</h3>
            <p
              className="modalExitButton"
              onClick={() => {
                setActive(false);
              }}
            >
              &#10005;
            </p>
          </div>
          <div className="modalAdditionalTextWrap">
            <p className="modalDescription">
              {Images[title]["description"]["p"]}
            </p>
            <h4 className="modalTechnologiesTitle">Technologies Used</h4>
            <ul className="modalTechnologiesUl">
              {Object.keys(Images[title]["description"]["technologies"]).map(
                (elem, index) => {
                  return (
                    <li key={index} className="modalTechnologiesLi">
                      {Images[title]["description"]["technologies"][elem]}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="modalButtons">
        <a href={[Images[title]["link"]]} target="_b" class="visitButtonAnchor"><button className="Visit Website">Visit Website</button></a>
        </div>
        </div>
      </div>
    </div>
  );
};
