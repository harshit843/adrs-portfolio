import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("auth_user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) throw new Error("Invalid credentials");

    localStorage.setItem("auth_user", JSON.stringify(found));
    setUser(found);
  };

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);
    if (exists) throw new Error("User already exists");

    const newUser = { email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    localStorage.setItem("auth_user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("auth_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);