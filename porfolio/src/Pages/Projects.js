import "./SCSS/Projects.css";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import {
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { ProjectCardDisplayer } from "../Components/ProjectCardDisplayer";

const config = getFirebaseConfig();
const app = initializeApp(config);
const db = getFirestore(app);

export const Projects = () => {
//Objects for fetched images and text
  const [imagesObject, setimagesObject] = useState({});
  const [textObject, setTextObject] = useState({});

  const fetchImages = async () => {
//an array with all the names of the projects in correct order
    const newProjectsArray = [];
    const querySnapshot = await getDocs(collection(db, "ProjectDescriptions"));
    querySnapshot.forEach((doc) => {
    newProjectsArray.push(doc.id);
    });
// fetching all of the image urls to use later in the project cards
    const allImages = newProjectsArray.map(async (elem) => {
      const storage = await getStorage();
      const imagesRef = await ref(storage, elem);
      const imagesList = await listAll(imagesRef);
//the structure in these fetches is a bit weird bu essentially these are 
//promises in promises and once all of them resolve than the top level promise
//gets resolved and the imagesObject set
      const promises = Object.keys(imagesList["items"]).map((imageRef) =>
        getDownloadURL(imagesList["items"][imageRef])
      );
      return Promise.all(promises);
    });

    const projectImagePromise = await Promise.all(allImages);

    const allProjectImagePromises = projectImagePromise.reduce(
      (acc, curr, index) => ({ ...acc, [newProjectsArray[index]]: curr }),
      {}
    );
    setimagesObject(allProjectImagePromises);
  };

  //getting all of the text from about the projects
  //the information is sorted by project
  const fetchText = async () => {
    const textSnapshot = await getDocs(collection(db, "ProjectDescriptions"));
    textSnapshot.forEach((project) => {
      const projectsData = project.data();
      setTextObject((prev) => {
        return { ...prev, [project["id"]]: projectsData };
      });
    });
  };
//fetch on component mount
  useEffect(() => {
    fetchImages();
    fetchText();
  }, []);

  return (
    <div className="projects">
      <h2 className="pageTitle"> Projects </h2>
      <div className="projectsDiv">
        {Object.keys(imagesObject) && Object.keys(textObject) ? (
          <ProjectCardDisplayer
            projects={Object.keys(imagesObject)}
            imagesObject={imagesObject}
            textObject={textObject}
          />
        ) : null}
      </div>
    </div>
  );
};
