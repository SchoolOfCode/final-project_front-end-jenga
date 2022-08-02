import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import LandingPage from "../LandingPage/LandingPage.js";
import SearchResult from "../SearchResult/SearchResult.js";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "../ProfilePage/ProfilePage";
import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [coords, setCoords] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
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
          path="/ProfilePage"
          element={
            <ProfilePage
              signOut={signOut}
              user={user}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
