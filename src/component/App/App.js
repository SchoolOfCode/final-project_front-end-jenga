import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import LandingPage from "../LandingPage/LandingPage.js";
import SearchResult from "../SearchResult/SearchResult.js";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../ProfilePage/Profile.js";
import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { useAuth0 } from "@auth0/auth0-react";

Amplify.configure(awsExports);

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [coords, setCoords] = useState({});
  const { user, isAuthenticated, isLoading } = useAuth0();

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
            />
          }
        ></Route>
        <Route
          path="/SearchResult"
          element={<SearchResult searchTerm={searchTerm} coords={coords} />}
        ></Route>
        <Route
          path="/Profile"
          element={
            <Profile
              user={user}
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
