import { useEffect, useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ProjectCard = ({ title, images }) => {
  const [active, setActive] = useState(false);

  const [display, setDisplay] = useState(false);
  const [data, setData] = useState();

  const openProjectDiv = (e) => {
    active ? setActive(false) : setActive(true);
  };

  // const firestore = getFirestore();

  // const newImages = {...images};
  // useEffect (() => {
  //   const projectRef = doc(firestore, "ProjectDescriptions", title);
  //   const projectSnap = getDoc(projectRef);
  //   //console.log("projectSnap", projectSnap.data());
  //   const projectData = projectSnap.data();
  //   console.log(projectData);
  //   setData(projectData);
  // },[]);

  

  // useEffect(() => {
  //   console.log("data", data);
  //   setDisplay(true);
  // }, [data]);
  
  console.log("Objektas", images,".keys", Object.keys(images));
  return active ? (
    <ProjectModal title={title} setActive={setActive} />
  ) : (
    <div className="projectCard" onClick={openProjectDiv}>
      <div className="projectImageDiv">
        {Object.values(images).map((elem, index) => {
          return <div key={index}></div>
        })
        }
      </div>
      <div className="projectTextWrap">
        {display ? (
          <div>
            {/* <h3 className="projectTitle">{Images[title]["name"]}</h3>
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
            </div> */}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
