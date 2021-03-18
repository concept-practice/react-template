import { ValidatorType } from './ValidatorType';

export default interface IValidator {
	IsValid(value: string): boolean;
	ErrorMessage(): string;
	Type(): ValidatorType;
}
