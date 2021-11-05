import React from 'react';
import './App.css';
import '../../node_modules/bulma/bulma.sass';
import { useRoutes } from 'react-router-dom';
import Paths from '../common/routing/Paths';
import Home from '../features/home/Home';

const App: React.FC = () => {
	const paths = useRoutes([
		{
			path: Paths.Home,
			element: <Home />,
		},
	]);

	return (
		<React.Fragment>
			<main aria-label="main" role="main">
				{paths}
			</main>
		</React.Fragment>
	);
};

export default App;
