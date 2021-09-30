import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { FavoriteContextProvider } from "./components/store/favorites-context";

ReactDOM.render(
  <FavoriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteContextProvider>,
  document.getElementById("root")
);
