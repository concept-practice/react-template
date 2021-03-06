import React from "react";
import "./App.css";
import "../../node_modules/bulma/css/bulma.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Paths from "../common/routing/Paths";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<main aria-label="main" role="main">
				<Switch>
					{Paths.AllPaths().map((path, index) => (
						<Route key={index + path.PathName} path={path.Path} component={path.Component}></Route>
					))}
				</Switch>
			</main>
		</BrowserRouter>
	);
};

export default App;
