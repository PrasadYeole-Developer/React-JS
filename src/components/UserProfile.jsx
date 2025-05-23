import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <h2>Name: {user.name}</h2>
    </div>
  );
};

export default UserProfile;
