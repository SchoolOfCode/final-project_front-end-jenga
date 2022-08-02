import "./Navbar.css";
import svg from "../../images/air-balloon-icon.svg";
const Navbar = () => {
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
          <button className="nav-link log">LOG IN</button>
        </li>
        <li className="nav-point">
          <button className="nav-link sign">SIGN UP</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
