import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
//import image from "../Images/W016.jpg";
import { motion } from "framer-motion";
import { useState } from "react";


export const Homewindow1 = ({ images, backgroundImage }) => {

  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="homewindow1">
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        className="parallaxContainer"
      >
        <motion.div className="parallaxText" variants={{hidden:{opacity: 0, scale:0.5}, visible:{opacity:1, scale:[0.5, 1.2, 1, 1.05, 1]}}}
        initial="hidden" animate={animationComplete ? "visible" : "hidden"}  transition={{duration: 1}}>
          <MouseParallaxChild
            factorX={-1}
            factorY={-1}
            className="parallaxTextName"
          >
            <h1>
              Justas <br /> Gecevicius
            </h1>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={-0.7}
            factorY={-0.7}
            className="parallaxTextPosition"
          >
            <h3> Front-end Web Developer </h3>
          </MouseParallaxChild>
        </motion.div>
        <MouseParallaxChild className="parallaxChild" factorX={-0.5} factorY={-0.5}>
          <motion.img
            src={backgroundImage}
            alt="number"
            animate={{
              opacity: [0, 1, 1, 1, 1],
              scale: [0.5, 0.8, 0.8, 0.5, 0.5],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{ duration: 3 }}
            onAnimationComplete={() => {setAnimationComplete(true)}}
          ></motion.img>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
};
