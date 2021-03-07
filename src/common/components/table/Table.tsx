import ITableViewModel from './ITableViewModel';

const Table: React.FC<TableProps> = ({ viewModel }) => {
	return (
		<div className="table">
			<thead>
				<tr>
					{viewModel.Head().map((head) => (
						<th>{head}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{viewModel.Body().map((row) => (
					<tr>
						{row.map((definition) => (
							<td>{definition}</td>
						))}
					</tr>
				))}
			</tbody>
		</div>
	);
};

interface TableProps {
	viewModel: ITableViewModel;
}

export default Table;
