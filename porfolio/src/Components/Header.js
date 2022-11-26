import { Link } from "react-router-dom";
import "../Pages/SCSS/header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="sides">{/* <a href= "#" class="logo" >BLOG</a> */}</div>
      <div className="info">
        <Link to="/">
          <h1>JG</h1>
        </Link>
        <div className="navigationWrapper">
          <Link to="/">
            <h3 className="navigationTitle">Home</h3>
          </Link>
          <Link to="/Projects">
            <h3 className="navigationTitle">Projects</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
