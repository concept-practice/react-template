import { useState } from "react";
import IUseInput from "./IUseInput";

export default function useInput<T>(
  initial: T,
  mappingFunction: (value: string) => T
): IUseInput<T> {
  const [value, setValue] = useState<T>(initial);
  const [valid, setValid] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");

  const handleOnInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const inputElement = event.target as HTMLInputElement;

    setValue(mappingFunction(inputElement.value));
    setValid(inputElement.validity.valid);
    setErrors(inputElement.validationMessage);
  };

  return {
    value,
    valid,
    errors,
    handleOnInput,
  };
}
