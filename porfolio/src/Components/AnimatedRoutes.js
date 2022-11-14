import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { Projects } from "../Pages/Projects/Projects";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};
