import "../SCSS/Home.css"
import { Homewindow1 } from "./HomeWindow1";
import {ParallaxProvider} from "react-scroll-parallax";
import { About } from "./About";

export const Home = () => {
  return <div className="Home">
    <ParallaxProvider>
      <Homewindow1/>
      <About/>
    </ParallaxProvider>
  </div>;
};
