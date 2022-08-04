import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./ProfilePage.css";
import Axios from "axios";

const Profile = ({ user, isAuthenticated, isLoading }) => {
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user);

  async function getLocation() {
    console.log("Inside Axios");
    Axios.get(
      "https://pacific-journey-78384.herokuapp.com/https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location"
    ).then((response) => {
      console.log(response.data.payload);
      console.log(response.data);
    });
  }
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={getLocation}>press me</button>
      </div>
    )
  );
};

export default Profile;
