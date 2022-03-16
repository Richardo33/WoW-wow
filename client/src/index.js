import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SubsContextProvider } from "./component/hook/subscribeContext";

// import { QueryClient, QueryClientProvider } from "react-query";

// const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <SubsContextProvider>
      {/* <QueryClientProvider client={client}> */}
      <App />
      {/* </QueryClientProvider> */}
    </SubsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
