import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useRef, useState, useEffect } from "react";
import { ProjectModal } from "./ProjectModal";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ProjectCard = ({ title, images, text }) => {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 }, x: 0 },
    hidden: { opacity: 0, scale: 1, x: "-100%" },
  };

  function Animation() {
    const controls = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        animate={controls}
        ref={ref}
        initial="hidden"
        variants={squareVariants}
        className="projectCard"
        onClick={openProjectDiv}
        whileHover={{scale:1.1}}
      >
        <div className="projectImageDiv">
          <img
            src={images[0]}
            className="projectImageMain"
            alt="projectImage"
          />
        </div>
        <div className="projectTextWrap">
          <h3 className="projectTitle">{text["name"]}</h3>
        </div>
      </motion.div>
    );
  }
  const [active, setActive] = useState(false);

  const openProjectDiv = () => {
    setActive((prev) => !prev);
  };

  const modal = useRef(null);
  active ? disableBodyScroll(modal) : enableBodyScroll(modal);

  return active ? (
    <ProjectModal
      title={title}
      setActive={setActive}
      images={images}
      text={text}
      ref={modal}
    />
  ) : (
    <Animation/>
  );
};
