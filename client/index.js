import React from "react";

import App from "./newApp.jsx";


import store from './store.js';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);