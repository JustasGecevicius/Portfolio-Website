import "../SCSS/Home.css"
import { Homewindow1 } from "./HomeWindow1";
import {ParallaxProvider} from "react-scroll-parallax";
import { About } from "./About";
import { useEffect, useState } from "react";
import {getStorage, ref, listAll, getDownloadURL} from "firebase/storage";
import { PropagateLoader } from "react-spinners";

export const Home = () => {

  
  const [backgroundImages, setBackgroundImages] = useState();
  const [loaded, setLoaded] = useState();

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
})
})},[]);

useEffect (() => {
  setTimeout(() => {
    setLoaded(true);
  }, 2000)
},[backgroundImages]);


  return <div className="Home">
    <ParallaxProvider>
      {loaded ? (<>
      <Homewindow1 images = {backgroundImages}/>
      <About/>
      </>
      ) : (
        <div className="loadingScreen">
          <PropagateLoader color="rgba(57, 214, 54, 1)" className="loader"/>
        </div>
        
      )}
      
    </ParallaxProvider>
  </div>;
};
