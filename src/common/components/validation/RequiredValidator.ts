import IValidator from './IValidator';
import { ValidatorType } from './ValidatorType';

export default class RequiredValidator implements IValidator {
	Type(): ValidatorType {
		return ValidatorType.Required;
	}
	ErrorMessage(): string {
		return 'The input must have a value.';
	}

	IsValid(value: string): boolean {
		return value !== null && value !== undefined && value !== '';
	}
}
