import SearchBar from "../../component/SearchBar/searchBar.js";
import LandingImage from "../../images/LandingImage.jpg";
import { useNavigate } from "react-router-dom";


function LandingPage({ searchTerm, setSearchTerm, setCoords }) {
  let navigate = useNavigate();
  return (
    <div
      // className="App"
      style={{
        backgroundImage: `url(${LandingImage})`,
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="search-tools">
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
