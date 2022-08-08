import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchResult.css";
import MapContainer from "../Map/Map.js";
import { putLocationByUser } from "../../models/models";
import ErrorPage from "../ErrorPage/errorPage";

const SearchResult = ({
  searchTerm,
  coords,
  user,
  isAuthenticated,
  noResults,
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [govAPI, setGovAPI] = useState("");

  const search = useLocation().search;
  const location = new URLSearchParams(search).get("location");
  const lat = new URLSearchParams(search).get("lat");
  const lng = new URLSearchParams(search).get("lng");

  const searchTermGov = location.toLowerCase().split(" ").join("-");
  const ApiKey = process.env.REACT_APP_UNSPLASH;
  const requestUrl = `https://api.unsplash.com/search/photos?query=${location}&orientation=landscape&client_id=${ApiKey}`;

  useEffect(() => {
    getLocationImage();
  }, []);

  //console.log(coords.lat);
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
    //console.log(govData.details.summary);

    setGovAPI(govData.details.summary);
  }
  //console.log("from results page", user.sub);
  return (
    <>
      {noResults === "ZERO_RESULTS" ? (
        <ErrorPage />
      ) : (
        <div className="results-page">
          <div className="top-picture">
            <img src={imageUrl} alt="Location" className="location-image"></img>
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="title-and-save">
              <p className="country-name">{location.toUpperCase()}</p>
              {isAuthenticated && (
                <button
                  className="save-button"
                  onClick={() => {
                    alert(`${location} has been saved to your profile.`);
                    putLocationByUser(user, coords, location, imageUrl);
                  }}
                >
                  Save
                </button>
              )}
            </div>
          </div>
          <div className="bottom-results">
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: govAPI }}
            ></div>
            <div className="map">
              <MapContainer lat={lat} lng={lng} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResult;
