import ITableViewModel from '../../common/components/table/ITableViewModel';
import AirplaneResponse from './AirplaneResponse';

export default class FleetIndexViewModel implements ITableViewModel {
	private tableBody: Array<Array<string>>;

	constructor(response: Array<AirplaneResponse>) {
		this.tableBody = response.map((response) => [response.manufacturer, response.model]);
	}

	Head(): Array<string> {
		return ['Manufacturer', 'Model'];
	}

	Body(): Array<Array<string>> {
		return this.tableBody;
	}
}
