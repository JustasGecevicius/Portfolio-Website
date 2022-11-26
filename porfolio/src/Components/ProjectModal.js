
export const ProjectModal = ({ title, setActive, images, text }) => {
  // function useLockBodyScroll() {
  //   // useLaoutEffect callback return type is "() => void" type
  //   useLayoutEffect(() => {
  //     // Get original body overflow
  //     const originalStyle = window.getComputedStyle(document.body).overflow;
  //     // Prevent scrolling on mount
  //     document.body.style.overflow = "hidden";
  //     // Re-enable scrolling when component unmounts
  //     return () => (document.body.style.overflow = originalStyle);
  //   }, []); // Empty array ensures effect is only run on mount and unmount
  // }




  return (
    <div className="projectModal">
      <div className="overlay"></div>
      <div className="modal">
            <p
              className="modalExitButton"
              onClick={() => {
                setActive(false);
              }}
            >
              &#10005;
            </p>
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
