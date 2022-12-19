import { Home } from "../Pages/Home/Home";
import { Projects } from "../Pages/Projects";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Blog } from "../Pages/Blog";

export const AnimatedRoutes = ({db}) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/Portfolio-Website" element={<Home />} />
        <Route path="/Portfolio-Website/Projects" element={<Projects />} />
        <Route path="/Portfolio-Website/Blog" element={<Blog db={db}/>}/>
      </Routes>
    </AnimatePresence>
  );
};
