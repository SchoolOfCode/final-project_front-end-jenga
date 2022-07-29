import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import Landingpage from "../../images/Landingpage.jpg";
import SearchBar from "../../component/SearchBar/searchBar.js";
import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Landingpage})`,
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <Navbar />
      <div className="search-tools">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
}

export default App;
