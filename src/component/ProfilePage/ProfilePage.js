import React from "react";
import "./ProfilePage.css";
import Axios from "axios";
import Carousel from "react-elastic-carousel";
import { useState, useEffect } from "react";
import ErrorPage from "../ErrorPage/errorPage.js";
import { Link } from "react-router-dom";
import { getLocationByUser } from "../../models/models.js";
const Profile = ({ user, isAuthenticated, isLoading, coords }) => {
  // const [toDelete, setToDelete] = useState("");

  const weatherApi = process.env.REACT_APP_WEATHER;
  const timezoneApi = process.env.REACT_APP_TIMEZONE;

  const [savedLocations, setSavedLocations] = useState([]);
  useEffect(() => {
    if (user) {
      getSavedLocation();
    }
  }, [user]);
  async function getSavedLocation() {
    let savedLocation = await getLocationByUser(user);
    // console.log("Function", savedLocation);
    setSavedLocations(savedLocation.data);
    //console.log("Function", savedLocation);
  }
  async function deleteLocation(locationId) {
    Axios.delete(
      `https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location/${locationId}`
    ).then((response) => {
      console.log(response);
    });
    setSavedLocations([
      ...savedLocations.filter((element) => element.locationId !== locationId),
    ]);
  }

  // const lat = 22;
  // const lng = 4;

  // const lat = coords.lat
  // const lng = coords.lng

  const [timezone, setTimezone] = useState([]);

  async function getTimeZone() {
    let emptyArray = [];
    for (let i = 0; i < savedLocations.length; i++) {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/timezone/json?location=${savedLocations[i].latitude},${savedLocations[i].longitude}&timestamp=1331161200&key=${timezoneApi}`
      );
      const data = await response.json();
      emptyArray.push(data);

      console.log(emptyArray);
    }
    setTimezone(emptyArray);
  }

  useEffect(() => {
    getTimeZone();
  }, [savedLocations]);

  const [weather, setWeather] = useState([]);

  async function getWeather() {
    let emptyArray = [];
    for (let i = 0; i < savedLocations.length; i++) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${savedLocations[i].latitude}&lon=${savedLocations[i].longitude}&appid=${weatherApi}`
      );
      const data = await response.json();
      emptyArray.push(data);

      console.log(emptyArray);
    }
    setWeather(emptyArray);
  }

  useEffect(() => {
    getWeather();
  }, [timezone]);

  //console.log("Main", savedLocations[0].locationId);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return isAuthenticated ? (
    <div className="profile-background-image">
      <div className="profile-info">
        <img className="profile-picture" src={user.picture} alt={user.name} aria-label="profile picture"/>
        <h2>{user.name.toUpperCase()}</h2>
      </div>

      <Carousel itemsToShow={3}>
        {savedLocations == 0
          ? []
          : savedLocations?.map((e, index) => (
              <div className="full-location-card">
                <Link
                  to={`/SearchResult?location=${e.locationName}&lat=${e.latitude}&lng=${e.longitude}`}
                  className="profile-link"
                >
                  <div className="Carousel" key={e.locationId}>
                    <h1>
                      {e.locationName.charAt(0).toUpperCase() +
                        e.locationName.slice(1)}
                    </h1>
                    <img
                      className="image"
                      src={e.locationImage}
                      alt="location"
                    ></img>
                    <h3 aria-label= "timezone information">{timezone == 0 ? [] : timezone[index].timeZoneName}</h3>
                    {/* <h3>{timezone == 0 ? [] : timezone[index].timeZoneId}</h3> */}
                    <h3>
                      GMT {}
                      {timezone == 0
                        ? []
                        : timezone[index].rawOffset / 3600 >= 0
                        ? " + " + timezone[index].rawOffset / 3600
                        : " - " +
                          (timezone[index].rawOffset / 3600)
                            .toString()
                            .slice(1)}
                    </h3>
                    {/* <img
                      className="weather"
                      src={
                        weather == 0
                          ? ""
                          : `http://openweathermap.org/img/w/${weather[index].weather[0].icon}.png`
                      }
                      alt="none"
                    ></img> */}
                    <h3>
                      {weather == 0
                        ? []
                        : Math.floor(weather[index].main.temp - 273.15) + " °C"}
                    </h3>
                    <img
                      aria-label="this is the average weather"
                      className="weather"
                      src={
                        weather == 0
                          ? ""
                          : `http://openweathermap.org/img/w/${weather[index].weather[0].icon}.png`
                      }
                      alt="average weather"
                    ></img>
                  </div>
                </Link>
                <button
                  className="remove"
                  onClick={() => deleteLocation(e.locationId)}
                >
                  remove
                </button>
              </div>
            ))}
      </Carousel>
    </div>
  ) : (
    <ErrorPage />
  );
};
export default Profile;
