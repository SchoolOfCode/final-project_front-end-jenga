import SearchBar from "../../component/SearchBar/searchBar.js";
import LandingImage from "../../images/LandingImage.jpg";

function LandingPage({ searchTerm, setSearchTerm }) {
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
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
}

export default LandingPage;
