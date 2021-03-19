import IValidator from './IValidator';
import { ValidatorType } from './ValidatorType';

export default class RequiredValidator implements IValidator {
	public Type(): ValidatorType {
		return ValidatorType.Required;
	}

	public ErrorMessage(): string {
		return 'The input must have a value.';
	}

	public IsValid(value: string): boolean {
		return value !== null && value !== undefined && value !== '';
	}
}
