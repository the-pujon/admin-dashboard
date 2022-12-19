import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MultiContextProvider } from "./context/multiCotext/MultipleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MultiContextProvider>
    <App />
  </MultiContextProvider>
);
