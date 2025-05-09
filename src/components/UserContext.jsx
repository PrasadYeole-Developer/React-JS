import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  let [user, setUser] = useState({ name: "Hiroshi", age: 22 });

  let updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
