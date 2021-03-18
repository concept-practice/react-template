import { InputType } from '../forms/InputType';
import IValidator from '../validation/IValidator';
import LengthValidator from '../validation/LengthValidator';
import { ValidatorType } from '../validation/ValidatorType';

export default class ViewModelField {
	private value: string;
	private validators: Array<IValidator>;
	private inputType: InputType;

	constructor(value: string, inputType: InputType, validators: Array<IValidator>) {
		this.value = value;
		this.validators = validators;
		this.inputType = inputType;
	}

	get Value(): string {
		return this.value;
	}

	set SetValue(value: string) {
		this.value = value;
	}

	get InputType(): InputType {
		return this.inputType;
	}

	public get MinLength(): number | undefined {
		var validatorExists = this.validators.filter((x) => x.Type() === ValidatorType.Length);

		if (validatorExists.length === 1) {
			return (validatorExists[0] as LengthValidator).Minimum;
		}
		return undefined;
	}

	public get MaxLength(): number | undefined {
		var validatorExists = this.validators.filter((x) => x.Type() === ValidatorType.Length);

		if (validatorExists.length === 1) {
			return (validatorExists[0] as LengthValidator).Maximum;
		}
		return undefined;
	}

	public get IsRequired(): boolean {
		var validatorExists = this.validators.filter((x) => x.Type() === ValidatorType.Required);

		if (validatorExists.length === 1) {
			return true;
		}
		return false;
	}

	public IsValid(value: string): boolean {
		return this.validators.every((validator) => validator.IsValid(value));
	}

	public ErrorMessages(value: string): Array<string> {
		return this.validators.filter((validator) => !validator.IsValid(value)).map((x) => x.ErrorMessage());
	}

	public static Text(validators: Array<IValidator> = []): ViewModelField {
		return new ViewModelField('', InputType.Text, validators);
	}

	public static Date(validators: Array<IValidator> = []): ViewModelField {
		return new ViewModelField('', InputType.Date, validators);
	}
}
