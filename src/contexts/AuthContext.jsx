import { createContext, useState, useEffect } from "react";
import axios from "../config/axios";
import {
  saveAccessToken,
  removeAccessToken,
  getAccessToken,
} from "../utils/local-storage";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const register = async (registerObject) => {
    const res = await axios.post("/auth/register", registerObject);
    saveAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const login = async (identity) => {
    const res = await axios.post("/auth/login", identity);
    saveAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
    window.location.replace("/");
  };

  const contextValue = {
    authUser,
    setAuthUser,
    register,
    login,
    logout,
    initialLoading,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
