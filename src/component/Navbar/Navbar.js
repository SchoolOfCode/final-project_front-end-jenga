import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginButton from "../Authentication/LoginButton";
import LogoutButton from "../Authentication/LogoutButton";
import svg from "../../images/air-balloon-icon.svg";

const Navbar = ({ user, isAuthenticated, isLoading }) => {
  return (
    <nav className="nav-container" aria-label="navbar">
      <div className="logo">
        <div className="balloon-container">
          <Link to="/" className="nav-link">
            <img className="balloon" src={svg} alt="SVG" />
          </Link>
        </div>
      </div>
      <Link to="/" className="nav-link">
        <div className="title-subtitle-container">
          <h1 className="title"> FINDERS KEEPERS</h1>
          <p className="subtitle">Your honest travel guide.</p>
        </div>
      </Link>
      <div className="nav-buttons-container">
        <Link to="/About" className="about-button">
          About Us
        </Link>
        <Link to="/" className="home-button">
          Home
        </Link>

        {!isAuthenticated && <LoginButton />}

        {isAuthenticated && <LogoutButton />}

        {isAuthenticated && (
          <Link to="/Profile">
            <div className="profile-image-container">
              <img
                className="profile-image"
                src={user.picture}
                alt={user.name}
              />
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
