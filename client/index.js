import React from "react";

import NewApp from "./newApp.jsx";


import store from './store.js';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <NewApp />
  </Provider>
);