import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import LandingPage from "../LandingPage/LandingPage.js";
import SearchResult from "../SearchResult/SearchResult.js";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../ProfilePage/ProfilePage.js";

import { useAuth0 } from "@auth0/auth0-react";
import AboutPage from "../AboutPage/aboutPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [coords, setCoords] = useState({});
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [noResults, setNoResults] = useState("");

  return (
    <Router>
      <Navbar
        user={user}
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setCoords={setCoords}
              setNoResults={setNoResults}
            />
          }
        ></Route>
        <Route
          path="/SearchResult"
          element={
            <SearchResult
              coords={coords}
              user={user}
              isAuthenticated={isAuthenticated}
              noResults={noResults}
            />
          }
        ></Route>
        <Route
          path="/Profile"
          element={
            <Profile
              user={user}
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
              coords={coords}
            />
          }
        />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
