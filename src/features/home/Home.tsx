import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
	return (
		<div className="container">
			<p>React Template!</p>
			<Link to="/fleet">Fleet</Link>
		</div>
	);
};

export default Home;
