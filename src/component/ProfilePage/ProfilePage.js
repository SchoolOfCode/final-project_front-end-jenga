import React from "react";
import "./ProfilePage.css";
import { useState, useEffect } from "react";
import {
  getLocation,
  getLocationByUser,
  deleteLocation,
  getUserId,
} from "../../models/models.js";

const Profile = ({ user, isAuthenticated, isLoading }) => {
  const [toDelete, setToDelete] = useState("");

  useEffect(() => {
    if (user) {
      getLocationByUser(getUserId(user.sub));
    }
  }, [user]);

  function handleChange(event) {
    setToDelete(event.target.value);
  }

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
        <button onClick={() => getLocationByUser(getUserId(user.sub))}>
          press me for filtered result
        </button>

        <button onClick={() => deleteLocation(toDelete)}>
          Delete your favourite location
        </button>
        <input type="text" onChange={handleChange} />
      </div>
    )
  );
};

export default Profile;
