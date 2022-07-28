import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import Landingpage from "../../images/Landingpage.jpg";
function App() {
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
      <h1>I am a beautiful Final Project App!</h1>
    </div>
  );
}

export default App;
