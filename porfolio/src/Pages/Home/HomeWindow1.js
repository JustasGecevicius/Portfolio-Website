import { useEffect, useState } from "react";
import {getStorage, ref, listAll, getDownloadURL} from "firebase/storage";
import arrow from "../Images/arrow.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export const Homewindow1 = ({images}) => {

  return (
    <div className="homewindow1">
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        className="parallaxContainer"
      >
        <MouseParallaxChild factorX={-0.7} factorY={-0.7}>
          <div className="mainTextDiv">
            <h1> Justas Gecevicius </h1>
            <h3> Front-end Web Developer </h3>
          </div>
        </MouseParallaxChild>
        {images ? (images.map((elem, index) => {
          return (
            <MouseParallaxChild key={index} className="parallaxChild" factorX={(Math.random() - Math.random()).toPrecision(4)} factorY={(Math.random() - Math.random()).toPrecision(4)}>
              <img src={elem} alt="number"></img>
            </MouseParallaxChild>
          )
        })) : (<MouseParallaxChild></MouseParallaxChild>)}        
      </MouseParallaxContainer>
      <img src={arrow} alt="arrow" className="arrow" />
    </div>
  );
};
