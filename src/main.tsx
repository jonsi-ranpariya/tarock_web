import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./store/auth-context";
import CrudContextProvider from "./store/crud-context";
import ThemeContextProvider from "./store/theme-context";
import UserContextProvider from "./store/user-context";
import AvtarContextProvider from "./store/avtar-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router basename={`/admin`}>
    <ThemeContextProvider>
      <AuthContextProvider>
        <CrudContextProvider>
          <AvtarContextProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </AvtarContextProvider>
        </CrudContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </Router>
);
