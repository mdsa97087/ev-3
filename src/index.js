import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import {BrowserRouter} from "react-router-dom"
import App from "./App";
import AppContextProvider  from "./Context/AppContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppContextProvider>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </AppContextProvider>
);

reportWebVitals();
