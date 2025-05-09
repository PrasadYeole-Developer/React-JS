import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        placeholder="Enter the Name"
        onChange={(e) => setNewName(e.target.value)}
      />
      <button type="submit">Update Name</button>
    </form>
  );
};

export default UpdateUser;
