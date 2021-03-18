import IValidator from './IValidator';
import { ValidatorType } from './ValidatorType';

export default class LengthValidator implements IValidator {
	private minimum: number;
	private maximum: number;

	constructor(minimum: number = 0, maximum: number = 0) {
		this.minimum = minimum;
		this.maximum = maximum;
	}

	Type(): ValidatorType {
		return ValidatorType.Length;
	}

	public get Minimum(): number {
		return this.minimum;
	}

	public get Maximum(): number {
		return this.maximum;
	}

	public IsValid(value: string): boolean {
		return value.length >= this.minimum && value.length <= this.maximum;
	}

	public ErrorMessage(): string {
		return `Value must be between ${this.minimum} and ${this.maximum}.`;
	}
}
