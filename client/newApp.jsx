import React from "react";
import store from "./store.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import newHomePage from "./Containers/newHomePage.jsx";

const App = () => {
  return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SignIn />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
				<Route path='/user/home' element={<newHomePage />}></Route>
				<Route path='/user/createEvent' element={<createEvent />}></Route>
			</Routes>
		</BrowserRouter>
  );

	return (
		<div>
				<BrowserRouter>
						<Routes>
								<Route path='/' element={<Tool />}></Route>
								<Route path='/create' element={<CreateTool />}></Route>
								<Route path='/update' element={<UpdateTool />}></Route>
						</Routes>
				</BrowserRouter>
		</div>
	)
};

export default App;
