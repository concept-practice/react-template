import FleetHandler from './FleetHandler';
import FleetIndex from './FleetIndex';

const FleetContainer: React.FC = () => {
	const handler = FleetHandler;

	return <FleetIndex indexViewModel={handler.IndexViewModel()}></FleetIndex>;
};

export default FleetContainer;
