import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./ProfilePage.css";
import Axios from "axios";

const Profile = ({ user, isAuthenticated, isLoading }) => {
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user);

  //Get everything from the database
  async function getLocation() {
    console.log("Inside Axios");
    Axios.get(
      "https://pacific-journey-78384.herokuapp.com/https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location"
    ).then((response) => {
      console.log(response.data.payload);
      console.log(response.data);
    });
  }

  //Get everything from the database by user
  async function getLocationByUser(userId) {
    console.log("Inside Axios");
    Axios.get(
      `https://pacific-journey-78384.herokuapp.com/https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location/${userId}`
    ).then((response) => {
      console.log(response.data);
    });
  }

  //Post new row to the database
  async function putLocationByUser() {
    Axios.post(
      "https://pacific-journey-78384.herokuapp.com/https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location/",
      {
        userId: "777777",
        locationId: "77777",
        latitude: "77777",
        longitude: "777777",
        locationName: "4St2777erling",
        locationImage: "4h777777se2re",
      }
    ).then((response) => {
      console.log(response);
    });
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={getLocation}>press me for everything</button>
        <button onClick={() => getLocationByUser("3")}>
          press me for filtered result
        </button>
        <button onClick={putLocationByUser}>Save a new location</button>
      </div>
    )
  );
};

export default Profile;
