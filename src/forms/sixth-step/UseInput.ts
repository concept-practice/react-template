import { useState } from "react";
import IUseInput from "./IUseInput";

export default function useInput(initial = ""): IUseInput {
  const [value, setValue] = useState<string>(initial);
  const [valid, setValid] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");

  const handleOnInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const inputElement = event.target as HTMLInputElement;

    setValue(inputElement.value);
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
