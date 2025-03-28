import { useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    userName: "",
    isLoggedIn: false,
  });
  const updateUser = (newDate) => {
    setUser((prev) => ({
      ...prev,
      ...newDate,
    }));
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
