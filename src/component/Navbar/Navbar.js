import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginButton from "../Authentication/LoginButton";
import LogoutButton from "../Authentication/LogoutButton";
import svg from "../../images/air-balloon-icon.svg";

const Navbar = ({ user, isAuthenticated, isLoading }) => {
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

          {isAuthenticated && (
            <Link to="/Profile">
              <img
                className="profileImage"
                src={user.picture}
                alt={user.name}
              />
            </Link>
          )}
        </li>
      </ul>
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
