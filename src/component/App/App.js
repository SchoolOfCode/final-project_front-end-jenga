import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import LandingPage from "../LandingPage/LandingPage.js";
import SearchResult from "../SearchResult/SearchResult.js";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        ></Route>
        <Route
          path="/SearchResult"
          element={<SearchResult searchTerm={searchTerm} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
