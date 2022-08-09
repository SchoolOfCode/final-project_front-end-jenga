import SearchBar from "../../component/SearchBar/searchBar.js";

import { useNavigate } from "react-router-dom";
import "./landingPage.css";
import { useEffect } from "react";

function LandingPage({ searchTerm, setSearchTerm, setCoords, setNoResults }) {
  let navigate = useNavigate();

  useEffect(() => {
    setSearchTerm("");
    setCoords("");
    setNoResults("");
  }, [setSearchTerm, setCoords, setNoResults]);

  return (
    <div className="landing-page-edit">
      <div className="search-tools">
        <h2 className="where-to-next">Travel advice for...</h2>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          navigate={navigate}
          setCoords={setCoords}
          setNoResults={setNoResults}
        />
      </div>
    </div>
  );
}

export default LandingPage;
