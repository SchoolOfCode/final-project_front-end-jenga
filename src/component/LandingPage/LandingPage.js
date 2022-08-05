import SearchBar from "../../component/SearchBar/searchBar.js";

import { useNavigate } from "react-router-dom";
import "./landingPage.css";

function LandingPage({ searchTerm, setSearchTerm, setCoords }) {
  let navigate = useNavigate();
  return (
    <div className="landing-page-edit">
      <div className="search-tools">
        <h2 className="call-to-action">Where to next...</h2>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          navigate={navigate}
          setCoords={setCoords}
        />
      </div>
    </div>
  );
}

export default LandingPage;
