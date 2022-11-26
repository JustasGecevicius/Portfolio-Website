import { Home } from "../Pages/Home/Home";
import { Projects } from "../Pages/Projects/Projects";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/Portfolio-Website" element={<Home />} />
        <Route path="/Portfolio-Website/Projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};
