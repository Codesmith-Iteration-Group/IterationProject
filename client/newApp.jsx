import React from "react";
import store from "./store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogIn from "./Containers/Login.jsx";
import SignUp from "./Containers/Signup.jsx";
import NewHomePage from "./Containers/NewHomePage.jsx";
import NewCreateEvent from "./Containers/NewCreateEvent.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/user/home" element={<NewHomePage />}></Route>
        <Route path="/user/createEvent" element={<NewCreateEvent />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
