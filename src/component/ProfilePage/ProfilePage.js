import React from "react";
import "./ProfilePage.css";
import { useState, useEffect } from "react";
import {
  getLocation,
  getLocationByUser,
  deleteLocation,
} from "../../models/models.js";

const Profile = ({ user, isAuthenticated, isLoading }) => {
  const [toDelete, setToDelete] = useState("");
  const [savedLocations, setSavedLocations] = useState([]);

  useEffect(() => {
    if (user) {
      getSavedLocation();
    }
  }, [user]);

  function handleChange(event) {
    setToDelete(event.target.value);
  }

  async function getSavedLocation() {
    let savedLocation = await getLocationByUser(user);
    console.log("Function", savedLocation);

    setSavedLocations(savedLocation);
    console.log("Function", savedLocation);
  }

  console.log("Main", savedLocations);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={getLocation}>press me for everything</button>
        <button onClick={() => getLocationByUser(user)}>
          press me for filtered result
        </button>
        <button onClick={() => deleteLocation(toDelete)}>
          Delete your favourite location
        </button>
        <input type="text" onChange={handleChange} />
        return{" "}
        <div>
          {savedLocations == 0
            ? null
            : savedLocations.data.map((e) => (
                <div>
                  <h1>{e.locationId}</h1>
                  <h1>{e.locationName}</h1>
                  <img
                    src={e.locationImage}
                    alt="none"
                    style={{ height: "100px", width: "100px" }}
                  ></img>
                </div>
              ))}
        </div>
      </div>
    )
  );
};

export default Profile;
