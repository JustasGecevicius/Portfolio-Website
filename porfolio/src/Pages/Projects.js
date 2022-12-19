import {ProjectCard} from "../Components/ProjectCard"
import "./SCSS/Projects.css";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirebaseConfig } from "./firebase-config";
import {initializeApp} from "firebase/app";



const config = getFirebaseConfig();
const app = initializeApp(config);
const db = getFirestore(app);

export const Projects = () => {
  const ProjectsArray = [
    "Ecommerce",
    "Calc",
    "AdminDash",
    "Etch",
    "MemoryGame",
    "Restaurant",
    "TTT",
    "Todo"
  ];

  const [imagesObject, setimagesObject] = useState({});
  const [textObject, setTextObject] = useState({});

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
    
    const newBybyDejau = bybydejau.reduce(
      (acc, curr, index) => ({ ...acc, [ProjectsArray[index]]: curr }),
      {}
    );

    setimagesObject(newBybyDejau);
  };
  const fetchText = async () => {
    const textSnapshot = await getDocs(collection(db, "ProjectDescriptions"));
    textSnapshot.forEach((project) => {
      const projectsData = project.data();
      setTextObject((prev) => {
        return {...prev, [project["id"]] : projectsData}
      })
    })
  }

useEffect (() => {
    fetchImages();
    fetchText();  
},[]);


  return (
    <div className="projects">
      <h2 className="pageTitle"> Projects </h2>
      <div className="projectsDiv">
        {imagesObject["Ecommerce"] && textObject["Ecommerce"] ? (<ProjectCard title="Ecommerce" images = {imagesObject["Ecommerce"]} text = {textObject["Ecommerce"]}/>) : (<div></div>)}
        {imagesObject["Calc"] && textObject["Calc"] ? (<ProjectCard title="Calc" images = {imagesObject["Calc"]} text = {textObject["Calc"]} />) : (<div></div>)}
        {imagesObject["AdminDash"] && textObject["AdminDash"] ? (<ProjectCard title="AdminDash" images = {imagesObject["AdminDash"]} text = {textObject["AdminDash"]} />) : (<div></div>)}
        {imagesObject["Etch"] && textObject["Etch"] ? (<ProjectCard title="Etch" images = {imagesObject["Etch"]} text = {textObject["Etch"]} />) : (<div></div>)}
        {imagesObject["MemoryGame"] && textObject["MemoryGame"] ? (<ProjectCard title="MemoryGame" images = {imagesObject["MemoryGame"]} text = {textObject["MemoryGame"]} />) : (<div></div>)}
        {imagesObject["Restaurant"] && textObject["Restaurant"] ? (<ProjectCard title="Restaurant" images = {imagesObject["Restaurant"]} text = {textObject["Restaurant"]} />) : (<div></div>)}
        {imagesObject["TTT"] && textObject["TTT"] ? (<ProjectCard title="TTT" images = {imagesObject["TTT"]} text = {textObject["TTT"]} />) : (<div></div>)}
        {imagesObject["Todo"] && textObject["Todo"] ? (<ProjectCard title="Todo" images = {imagesObject["Todo"]} text = {textObject["Todo"]} />) : (<div></div>)}                 
      </div>
    </div>
  );
};
