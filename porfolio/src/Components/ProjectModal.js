export const ProjectModal = ({ title, setActive, images, text }) => {
  return (
    <div className="projectModal">
      <div className="overlay"></div>
      <div className="modal">
        <div className="modalImageDiv">
          {Object.values(images).map((elem, index) => {
            return (
              <img
                key={index}
                className="modalImage"
                src={elem}
                alt="ProjectImage"
              />
            );
          })}
        </div>
        <div className="modalTextWrap">
          <div className="modalTitleWrap">
            <h3 className="modalTitle">{text["name"]}</h3>
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
            <p className="modalDescription">{text["p"]}</p>
            <h4 className="modalTechnologiesTitle">Technologies Used</h4>
            <ul className="modalTechnologiesUl">
              {text["tech"].map((elem, index) => {
                return <li key={index}>{elem}</li>;
              })}
            </ul>
          </div>
          <div className="modalButtons">
            <a href={text["link"]} target="_b" className="visitButtonAnchor">
              <button className="visitWebsite">Visit Website</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
