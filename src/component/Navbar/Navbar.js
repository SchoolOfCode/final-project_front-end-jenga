import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginButton from "../Authentication/LoginButton";
import LogoutButton from "../Authentication/LogoutButton";
import svg from "../../images/air-balloon-icon.svg";

const Navbar = ({ user, isAuthenticated, isLoading }) => {
  return (
    <nav className="nav-container" aria-label="navbar">
      <div className="nav-appname">
        <div className="balloon-container">
          <a className="nav-link" href="/">
            <img className="balloon" src={svg} alt="SVG" />
          </a>
        </div>
      </div>
      <h1 className="title"> FINDERS KEEPERS</h1>
      <div className="nav-buttons-container">
        <a href="/">
          <button className="home-button">Home</button>
        </a>

        {!isAuthenticated && <LoginButton />}

        {isAuthenticated && <LogoutButton />}

        {isAuthenticated && (
          <div className="profile-image-container">
            <Link to="/Profile">
              <img
                className="profile-image"
                src={user.picture}
                alt={user.name}
              />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

/* 
user.image ? (
            <Link to="/Profile">{user.image}</Link>
          ) : (
            <Link to="/Profile">PROFILE</Link>
          )} 



          { isNull
          ? null
          : ( isEmpty
              ? <p>Sorry, the list is empty.</p>
              : <div>{list.map(item => <ListItem item={item} />)}</div>
            )
      }
*/
