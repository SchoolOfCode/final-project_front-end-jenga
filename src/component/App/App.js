// import SearchResult from "../SearchResult/SearchResult";
import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import LandingPage from "../LandingPage/LandingPage.js"
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={< LandingPage searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}></Route>
				{/* <Route exact path='/about' element={< About />}></Route>
				<Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
