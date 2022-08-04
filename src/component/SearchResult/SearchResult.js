import { useEffect, useState } from "react";
import "./SearchResult.css";
import MapContainer from "../Map/Map.js";
import Axios from "axios";

const SearchResult = ({ searchTerm, coords, user }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [govAPI, setGovAPI] = useState("");
  const searchTermGov = searchTerm.toLowerCase();
  const ApiKey = process.env.REACT_APP_UNSPLASH;
  const requestUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&orientation=landscape&client_id=${ApiKey}`;

  useEffect(() => {
    getLocationImage();
  }, []);

  async function putLocationByUser() {
    Axios.post(
      "https://pacific-journey-78384.herokuapp.com/https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location/",
      {
        userId: user.sub,
        locationId: Date.now().toString(),
        latitude: coords.lat,
        longitude: coords.lng,
        locationName: searchTerm,
        locationImage: imageUrl,
      }
    ).then((response) => {
      console.log(response);
    });
  }
console.log(coords.lat)
  async function getLocationImage() {
    let randomNumber = Math.floor(Math.random() * 5);
    const response = await fetch(requestUrl);
    const data = await response.json();
    let oneImage = data.results[randomNumber];
    setImageUrl(oneImage.urls.full);
    
    const govResponse = await fetch(
      `https://pacific-journey-78384.herokuapp.com/https://www.gov.uk/api/content/foreign-travel-advice/${searchTermGov}`
    );
    const govData = await govResponse.json();
    console.log(govData.details.summary);
    setGovAPI(govData.details.summary);
  }
  console.log("from results page", user.sub)
  return (
    <div className="results-page">
      <div className="top-picture">
        <img src={imageUrl} alt="Location" className="location-image"></img>
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="country-name">{searchTerm.toUpperCase()}</p>
        <button onClick= {putLocationByUser}>Save</button>
      </div>
      <div className="bottom-results">
        <div
          className="text"
          dangerouslySetInnerHTML={{ __html: govAPI }}
        ></div>
        <div className="map">
          <MapContainer coords={coords} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
