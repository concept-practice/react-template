import IValid from "./IValid";

export default interface IUseInput extends IValid {
  value: string;
  errors: string;
  handleOnInput: (event: React.FormEvent<HTMLInputElement>) => void;
}
