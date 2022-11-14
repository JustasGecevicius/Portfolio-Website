import { useEffect, useState } from "react";
import Image1 from "../Images/Numbers/1.png";
import Image3 from "../Images/Numbers/3.png";
import Image4 from "../Images/Numbers/4.png";
import Image5 from "../Images/Numbers/5.png";
import Image7 from "../Images/Numbers/7.png";
import Image8 from "../Images/Numbers/8.png";
import Image9 from "../Images/Numbers/9.png";
import arrow from "../Images/arrow.png";
import {MouseParallaxContainer, MouseParallaxChild} from "react-parallax-mouse";

export const Homewindow1 = () => {

  const [coordinates, setCoordinates] = useState({x : "", y : ""});



  const handleMouseMove = (e) => {
    setCoordinates({x : e.clientX / 250, y : e.clientY / 250})
  }

  useEffect (() => {
    //console.log(coordinates.x * -6);
  },[coordinates]);

  return (
    <div className="homewindow1" onMouseMove={handleMouseMove}>
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} className="parallaxContainer">
        <MouseParallaxChild factorX={-0.7} factorY={-0.7}>
          <div className="mainTextDiv">
            <h1> Justas Gecevicius </h1>
            <h3> Front-end Web Developer </h3>
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild className="parallaxChild" factorX={0.2} factorY={0.2}><img src={Image1} className="object" alt="number" data-value="-6" /></MouseParallaxChild>
        <MouseParallaxChild className="parallaxChild" factorX={0.1} factorY={0.1}><img src={Image3} className="object" alt="number" data-value="4" /></MouseParallaxChild>
        <MouseParallaxChild className="parallaxChild" factorX={-0.3} factorY={-0.3}><img src={Image4} className="object" alt="number" data-value="4" /></MouseParallaxChild>
        <MouseParallaxChild className="parallaxChild" factorX={-0.5} factorY={-0.5}><img src={Image5} className="object" alt="number" data-value="4" /></MouseParallaxChild>
        <MouseParallaxChild className="parallaxChild" factorX={0.3} factorY={0.3}><img src={Image7} className="object" alt="number" data-value="4" /></MouseParallaxChild>
        <MouseParallaxChild className="parallaxChild" factorX={0.3} factorY={0.3}><img src={Image8} className="object" alt="number" data-value="4" /></MouseParallaxChild>
        <MouseParallaxChild className="parallaxChild" factorX={-0.2} factorY={-0.2}><img src={Image9} className="object" alt="number" data-value="4" /></MouseParallaxChild>
      </MouseParallaxContainer>
      <img src={arrow} alt="arrow" className="arrow"/>
    </div>
  );
};
