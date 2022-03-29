import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SubsContextProvider } from "./component/hook/subscribeContext";
import { UserContextProvider } from "./component/hook/userContext";
import { BrowserRouter } from "react-router-dom";

// import { QueryClient, QueryClientProvider } from "react-query";

// const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <SubsContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </SubsContextProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
