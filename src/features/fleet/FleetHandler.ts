import AirplaneResponse from './AirplaneResponse';
import FleetIndexViewModel from './FleetIndexViewModel';

export default class FleetHandler {
	public static GetFleet(): Array<AirplaneResponse> {
		return [new AirplaneResponse(), new AirplaneResponse(), new AirplaneResponse()];
	}

	public static IndexViewModel(): FleetIndexViewModel {
		return new FleetIndexViewModel(this.GetFleet());
	}

	public static AddAirplane(): void {
		//mock
	}
}
