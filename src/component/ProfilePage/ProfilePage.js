import { withAuthenticator } from "@aws-amplify/ui-react";
import "./ProfilePage.css";
import { Auth } from "aws-amplify";

const ProfilePage = ({ signOut, user, setIsLoggedIn }) => {
  function userSignOut() {
    signOut();
    setIsLoggedIn(false);
  }

  //setIsLoggedIn(user.username === "undefined");

  return (
    <div className="login-div">
      <h2>Profile Page</h2>
      <p>Hello {user.username}</p>
      {console.log(user)}
      {setIsLoggedIn(true)}
      <button onClick={userSignOut}>Logout</button>
    </div>
  );
};

export default withAuthenticator(ProfilePage);
