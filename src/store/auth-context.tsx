import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserData } from "../models/data";

//auth response type declaration
type AuthResponseType = {
  data?: UserData;
  setData: (data: UserData) => void;
  login: (data: UserData) => void;
  logout: () => void;
  isLoggedIn: boolean;
};

//auth context initialization
export const AuthContext = React.createContext<AuthResponseType>({
  setData: (d) => {},
  login: (data) => {},
  logout: () => {},
  isLoggedIn: false,
});

const AuthContextProvider = (props: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const initialToken = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(
    initialToken === "1" ? false : true
  );
  const [data, setData] = useState<UserData>(
    initialToken ? JSON.parse(initialToken) : undefined
  );

  //login a user
  const loginHandler = (data: UserData) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("token", JSON.stringify(data));
    setIsLoggedIn(true);
    setData(data);
  };

  //logout
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        setData: setData,
        data: data,
        login: loginHandler,
        logout: logoutHandler,
        isLoggedIn: isLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const authCtx = useContext(AuthContext);
  return authCtx;
}

export default AuthContextProvider;
