export default interface IUseInput {
  value: string;
  valid: boolean;
  errors: string;
  handleOnInput: (event: React.FormEvent<HTMLInputElement>) => void;
}
