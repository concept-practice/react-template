import IValid from "./IValid";

export default interface IUseInput<T> extends IValid {
  value: T;
  errors: string;
  handleOnInput: (event: React.FormEvent<HTMLInputElement>) => void;
}
