import React from 'react';

const ValidationMessage: React.FC<ValidationMessageProps> = ({ isValid, errorMessages }) => {
	return (
		<React.Fragment>
			{errorMessages.map((message) => (
				<p className="help is-danger">{isValid ? '' : message}</p>
			))}
		</React.Fragment>
	);
};

interface ValidationMessageProps {
	isValid: boolean;
	errorMessages: Array<string>;
}

export default ValidationMessage;
