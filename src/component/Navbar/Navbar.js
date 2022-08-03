import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginButton from "../Authentication/LoginButton";
import LogoutButton from "../Authentication/LogoutButton";

const Navbar = ({ user, isAuthenticated, isLoading }) => {
  console.log(isAuthenticated);
  return (
    <nav className="nav-container" aria-label="navbar">
      <div className="nav-appname">
        <a className="nav-link" href="/">
          <img className="balloon" src={svg} alt="SVG" />
        </a>
      </div>
      <div className="title"> FINDERS KEEPERS</div>
      <ul className="home-buttons">
        <li className="nav-point">
          <a href="/">
            <button className="nav-link home ">HOME</button>
          </a>
        </li>
        <li className="nav-point">
          {!isAuthenticated && <LoginButton />}

          {isAuthenticated && <LogoutButton />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
