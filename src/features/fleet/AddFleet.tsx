import React, { useEffect } from 'react';
import Input from '../../common/components/forms/Input';
import AddFleetViewModel from './AddFleetViewModel';

const AddFleet: React.FC = () => {
	const [valid, setValid] = React.useState<boolean>(false);
	const [viewModel] = React.useState<AddFleetViewModel>(new AddFleetViewModel());

	useEffect(() => {
		setValid(viewModel.IsValid());
	}, [valid, viewModel]);

	return (
		<form>
			{viewModel.Fields().map((field) => (
				<Input field={field} formValid={valid} setFormInvalid={setValid}></Input>
			))}
			<input type="submit" className="button is-info" value="Submit" disabled={!valid}></input>
		</form>
	);
};

export default AddFleet;
