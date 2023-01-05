import "../SCSS/Home.css"
import { Homewindow1 } from "./HomeWindow1";
import {ParallaxProvider} from "react-scroll-parallax";
import { About } from "./About";
import { useEffect, useState } from "react";
import {getStorage, ref, listAll, getDownloadURL} from "firebase/storage";
import image from "../Images/W016.jpg";
import {Contacts} from "./Contacts"

export const Home = () => {

  
  const [backgroundImages, setBackgroundImages] = useState();

  const fetchImages = async () => {
    const storage = await getStorage();
    const imagesRef = await ref(storage, "Numbers");
    const imagesList = await listAll(imagesRef);

    const promises = Object.keys(imagesList["items"]).map((imageRef) =>
      getDownloadURL(imagesList["items"][imageRef])
    );

    return Promise.all(promises);    
}

useEffect (() => {fetchImages().then((response) => {
setBackgroundImages((prev) => {
  return response;
});
})},[]);




  return <div className="Home">
    {
      backgroundImages ? (<ParallaxProvider>      
      <Homewindow1 images = {backgroundImages} backgroundImage={image}/>
      <About/>
      <Contacts />   
    </ParallaxProvider>) : (null)
    }
    
  </div>;
};
