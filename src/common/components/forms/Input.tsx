import React, { useEffect } from 'react';
import ValidationMessage from '../validation/ValidationMessage';
import ViewModelField from '../viewmodels/ViewModelField';
import { InputType } from './InputType';

const Input: React.FC<InputProps> = ({ field, formValid, setFormInvalid }) => {
	const [htmlIsValid, setHtmlIsValid] = React.useState<boolean>(true);
	const [viewModelValid, setViewModelValid] = React.useState<boolean>(formValid);
	const [errorMessages, setErrorMessages] = React.useState<Array<string>>([]);
	const [value, setValue] = React.useState<string>(field.Value);

	useEffect(() => {
		setViewModelValid(field.IsValid(value));
		setFormInvalid(htmlIsValid && viewModelValid);
		setErrorMessages(field.ErrorMessages(value));
		field.SetValue = value;
	}, [value, htmlIsValid, viewModelValid, field, setFormInvalid]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
		setHtmlIsValid(e.target.validity.valid);
	};

	const DetermineType = (inputType: InputType): string => {
		switch (inputType) {
			case InputType.Text:
				return 'text';
			case InputType.Date:
				return 'date';
			default:
				return 'text';
		}
	};

	return (
		<div className="field">
			<div className="control">
				<input
					className={`input ${htmlIsValid ? '' : 'is-danger'}`}
					type={DetermineType(field.InputType)}
					value={value}
					required={field.IsRequired}
					minLength={field.MinLength}
					maxLength={field.MaxLength}
					onChange={onChange}></input>
				<ValidationMessage isValid={htmlIsValid} errorMessages={errorMessages}></ValidationMessage>
			</div>
		</div>
	);
};

interface InputProps {
	field: ViewModelField;
	formValid: boolean;
	setFormInvalid(value: boolean): void;
}

export default Input;
