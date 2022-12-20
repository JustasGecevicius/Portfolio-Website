import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import image from "../Images/W016.jpg";
import { motion } from "framer-motion";

export const Homewindow1 = ({ images }) => {
  return (
    <div className="homewindow1">
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        className="parallaxContainer"
      >
        <div className="parallaxText">
          <MouseParallaxChild
            factorX={-0.7}
            factorY={0}
            className="parallaxTextName"
          >
            <h1>
              Justas <br /> Gecevicius
            </h1>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={-1.5}
            factorY={0}
            className="parallaxTextPosition"
          >
            <h3> Front-end Web Developer </h3>
          </MouseParallaxChild>
        </div>
        <MouseParallaxChild className="parallaxChild" factorX={0} factorY={0.7}>
          <motion.img
            src={image}
            alt="number"
            animate={{
              scale: [0, 0.8, 0.8, 0.5, 0.5],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{ duration: 3 }}
          ></motion.img>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
};
