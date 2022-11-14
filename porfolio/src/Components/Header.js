import { Link } from "react-router-dom";
import "../Pages/SCSS/header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="sides">{/* <a href= "#" class="logo" >BLOG</a> */}</div>
      <div className="info">
        <a href="#category">
          <h1>JG</h1>
        </a>
        <div className="navigationWrapper">
          <Link to="/">
            <h3 className="navigationTitle">Home</h3>
          </Link>
          <Link to="/About">
            <h3 className="navigationTitle">About Me</h3>
          </Link>
          <Link to="/Projects">
            <h3 className="navigationTitle">Project</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
