import { useEffect, useState } from "react";
import "./SearchResult.css";
import MapContainer from "../Map/Map.js";

const SearchResult = ({ searchTerm }) => {
  const [imageUrl, setImageUrl] = useState("");
  // const searchTerm = "London";
  const ApiKey = process.env.REACT_APP_UNSPLASH;
  console.log(ApiKey);
  const requestUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&orientation=landscape&client_id=${ApiKey}`;

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
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="country-name">{searchTerm.toUpperCase()}</p>
      </div>
      <div className="bottom-results">
        <div className="text"></div>
        <div className="map">
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
