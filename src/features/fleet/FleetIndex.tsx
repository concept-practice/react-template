import React from 'react';
import LayoutContainer from '../../common/components/layout/Container';
import Table from '../../common/components/table/Table';
import AddFleet from './AddFleet';
import FleetIndexViewModel from './FleetIndexViewModel';

const FleetIndex: React.FC<FleetIndexProps> = ({ indexViewModel }) => {
	const [viewModel] = React.useState<FleetIndexViewModel>(indexViewModel);

	return (
		<LayoutContainer>
			<Table viewModel={viewModel}></Table>
			<AddFleet></AddFleet>
		</LayoutContainer>
	);
};

interface FleetIndexProps {
	indexViewModel: FleetIndexViewModel;
}

export default FleetIndex;
