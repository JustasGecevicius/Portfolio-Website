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
    "Todo"
  ];

  const [fetched, setFetched] = useState({});

  const [imagesObject, setimagesObject] = useState({});

  const fetchImages = () => {
    ProjectsArray.forEach(async (elem) => {
      //console.log("ForEach", elem);
      const storage = await getStorage();
      //console.log(elem);
      const imagesRef = await ref(storage, elem);
      const imagesList = await listAll(imagesRef);
      //const zeba = await getDownloadURL(imagesRef);
      const imagesURLS = {};
       //console.log(imagesList);
      await Object.keys(imagesList["items"]).forEach(async (ImageRefference) => {
        //console.log("ImageRefference", ImageRefference)
        imagesURLS[ImageRefference] = await getDownloadURL(imagesList["items"][ImageRefference])
      })
      setimagesObject(prev => {
        //console.log("imagesURLS", {...imagesURLS});
          return {...prev, [elem] : imagesURLS}
      })
    })
  }

useEffect (() => {
    fetchImages();  
},[]);


  return (
    <div className="projects">
      <h2 className="pageTitle"> Projects </h2>
      <div className="projectsDiv">
        {imagesObject["Ecommerce"] ? (<ProjectCard title="Ecommerce" images = {imagesObject["Ecommerce"]}/>) : (<div></div>)}
        {imagesObject["Calc"] ? (<ProjectCard title="Calc" images = {imagesObject["Calc"]} />) : (<div></div>)}
        {imagesObject["AdminDash"] ? (<ProjectCard title="AdminDash" images = {imagesObject["AdminDash"]} />) : (<div></div>)}
        {imagesObject["Etch"] ? (<ProjectCard title="Etch" images = {imagesObject["Etch"]} />) : (<div></div>)}
        {imagesObject["MemoryGame"] ? (<ProjectCard title="MemoryGame" images = {imagesObject["MemoryGame"]} />) : (<div></div>)}
        {imagesObject["Restaurant"] ? (<ProjectCard title="Restaurant" images = {imagesObject["Restaurant"]} />) : (<div></div>)}
        {imagesObject["TTT"] ? (<ProjectCard title="TTT" images = {imagesObject["TTT"]} />) : (<div></div>)}
        {imagesObject["Todo"] ? (<ProjectCard title="Todo" images = {imagesObject["Todo"]} />) : (<div></div>)}                 
      </div>
    </div>
  );
};
