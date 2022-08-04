import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./ProfilePage.css";

const Profile = ({ user, isAuthenticated, isLoading }) => {
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;