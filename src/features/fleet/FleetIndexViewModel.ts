import ITableViewModel from '../../common/components/table/ITableViewModel';
import AirplaneResponse from './AirplaneResponse';

export default class FleetIndexViewModel implements ITableViewModel {
	private tableBody: Array<Array<string>>;

	public constructor(response: Array<AirplaneResponse>) {
		this.tableBody = response.map((response) => [response.manufacturer, response.model]);
	}

	public Head(): Array<string> {
		return ['Manufacturer', 'Model'];
	}

	public Body(): Array<Array<string>> {
		return this.tableBody;
	}
}
