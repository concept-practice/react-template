import ViewModelField from './ViewModelField';

export default interface IViewModel {
	IsValid(): boolean;
	Fields(): Array<ViewModelField>;
}
