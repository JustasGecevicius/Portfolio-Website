import { ProjectCard } from "../../Components/ProjectCard";
import "../SCSS/Projects.css";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

export const Projects = () => {
  const ProjectsArray = [
    "Ecommerce",
    "Calc",
    "AdminDash",
    "Etch",
    "MemoryGame",
    "Restaurant",
    "TTT",
    "Todo",
  ];

  const [fetched, setFetched] = useState({});

  const [imagesObject, setimagesObject] = useState({});

  const fetchImages = async () => {
    const allImages = ProjectsArray.map(async (elem) => {
      const storage = await getStorage();
      const imagesRef = await ref(storage, elem);
      const imagesList = await listAll(imagesRef);

      const promises = Object.keys(imagesList["items"]).map((imageRef) =>
        getDownloadURL(imagesList["items"][imageRef])
      );

      return Promise.all(promises);
    });

    const bybydejau = await Promise.all(allImages);

    console.log(bybydejau);

    const newBybyDejau = bybydejau.reduce(
      (acc, curr, index) => ({ ...acc, [ProjectsArray[index]]: curr }),
      {}
    );

    setimagesObject(newBybyDejau);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (Object.values(imagesObject).length === 0) {
    return null;
  }

  return (
    <div className="projects">
      <h2 className="pageTitle"> Projects </h2>
      <div className="projectsDiv">
        {imagesObject["Ecommerce"] ? (
          <ProjectCard title="Ecommerce" images={imagesObject["Ecommerce"]} />
        ) : (
          <div></div>
        )}
        {imagesObject["Calc"] ? (
          <ProjectCard title="Calc" images={imagesObject["Calc"]} />
        ) : (
          <div></div>
        )}
        {imagesObject["AdminDash"] ? (
          <ProjectCard title="AdminDash" images={imagesObject["AdminDash"]} />
        ) : (
          <div></div>
        )}
        {imagesObject["Etch"] ? (
          <ProjectCard title="Etch" images={imagesObject["Etch"]} />
        ) : (
          <div></div>
        )}
        {imagesObject["MemoryGame"] ? (
          <ProjectCard title="MemoryGame" images={imagesObject["MemoryGame"]} />
        ) : (
          <div></div>
        )}
        {imagesObject["Restaurant"] ? (
          <ProjectCard title="Restaurant" images={imagesObject["Restaurant"]} />
        ) : (
          <div></div>
        )}
        {imagesObject["TTT"] ? (
          <ProjectCard title="TTT" images={imagesObject["TTT"]} />
        ) : (
          <div></div>
        )}
        {imagesObject["Todo"] ? (
          <ProjectCard title="Todo" images={imagesObject["Todo"]} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
