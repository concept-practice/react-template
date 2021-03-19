import IViewModel from '../../common/components/viewmodels/IViewModel';
import LengthValidator from '../../common/components/validation/LengthValidator';
import RequiredValidator from '../../common/components/validation/RequiredValidator';
import ViewModelField from '../../common/components/viewmodels/ViewModelField';

export default class AddFleetViewModel implements IViewModel {
	private manufacturer: ViewModelField;
	private date: ViewModelField;
	private fields: Array<ViewModelField>;

	public constructor() {
		this.manufacturer = ViewModelField.Text([new RequiredValidator(), new LengthValidator(3, 10)]);
		this.date = ViewModelField.Date();
		this.fields = [this.manufacturer, this.date];
	}

	public Fields(): ViewModelField[] {
		return this.fields;
	}

	public IsValid(): boolean {
		return this.fields.every((x) => x.IsValid(x.Value));
	}

	public get Manufacturer(): ViewModelField {
		return this.manufacturer;
	}

	public get Date(): ViewModelField {
		return this.date;
	}
}
