import { useEffect, useState } from "react";
import "./SearchResult.css";

const SearchResult = () => {
  const [imageUrl, setImageUrl] = useState("");
  const location = "London";
  const ApiKey = "-csYdQoUNZY1UOcp4zEnsOVjNZyBXTmDfjJcair8Q6o";
  const requestUrl =
  `https://api.unsplash.com/search/photos?query=${location}&orientation=landscape&client_id=${ApiKey}`;

  useEffect(() => {
    getLocationImage();
  }, []);

  async function getLocationImage() {
    let randomNumber = Math.floor(Math.random() * 5);
    const response = await fetch(requestUrl);
    const data = await response.json();
    let oneImage = data.results[randomNumber];
    setImageUrl(oneImage.urls.full);
  }

  return (
    <div className="results-page">
      <div className="top-picture">
        <img src={imageUrl} alt="Location" className="location-image"></img>
        {/* <p className="test">LONDON</p> */}
      </div>
      <div className="bottom-results">
        <div className="text"></div>
        <div className="map"></div>
      </div>
    </div>
  );
};

export default SearchResult;
