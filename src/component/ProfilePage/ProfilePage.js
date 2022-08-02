import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./ProfilePage.css";

const ProfilePage = ({ signOut, user }) => {
  return (
    <div className="login-div">
      <h2>Profile Page</h2>
      <p>Hello {user.username}</p>
      {console.log(user)}
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default withAuthenticator(ProfilePage);
