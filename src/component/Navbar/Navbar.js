import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginButton from "../Authentication/LoginButton";
import LogoutButton from "../Authentication/LogoutButton";

const Navbar = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <nav className="nav-container" aria-label="navbar">
      <div className="nav-appname">
        <a className="nav-link" href="/">
          <svg
            width="45"
            height="90"
            viewBox="0 0 77 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.862766 1.43262C1.19481 0.589709 1.93029 0.0473633 2.74131 0.0473633H74.8073C75.9445 0.0473633 76.8663 1.09751 76.8663 2.39293V48.5224C76.8663 49.8179 75.9445 50.868 74.8073 50.868H43.3627L76.3455 93.0927C76.8846 93.7829 77.0179 94.7694 76.6858 95.6123C76.3538 96.4552 75.6183 96.9975 74.8073 96.9975H40.8333V140.781C40.8333 141.755 40.3053 142.627 39.5065 142.974C38.7077 143.32 37.8042 143.068 37.2361 142.341L1.20915 96.2189C0.896189 95.8221 0.700317 95.303 0.68347 94.7322C0.682518 94.7007 0.682123 94.6692 0.682287 94.6376C0.682494 94.5978 0.68359 94.558 0.68558 94.5182C0.746454 93.285 1.64356 92.3064 2.74131 92.3064H4.80034V50.868H37.8503L70.2189 92.3064H38.7743C39.9115 92.3064 40.8333 93.3565 40.8333 94.652M36.7153 96.9975H7.32968L36.7153 134.617V96.9975ZM70.2189 92.3064L73.2691 96.2112L74.8073 94.652V92.3064H70.2189ZM34.1859 46.1769H2.74131C1.60415 46.1769 0.682287 47.227 0.682287 48.5224V94.6376V94.652M34.1859 46.1769L1.2031 3.95216C0.663963 3.26196 0.530719 2.27553 0.862766 1.43262M39.6983 46.1769H72.7483V4.7385H7.32968L39.6983 46.1769ZM4.80034 50.868V48.5224H2.74131V50.868H4.80034Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <div className="title"> FINDERS KEEPERS</div>
      <ul className="home-buttons">
        <li className="nav-point">
          <Link to="/">
            <button className="nav-link">HOME</button>
          </Link>
        </li>
        <li className="nav-point">
          <Link to="/Profile">
            <LoginButton />
          </Link>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
