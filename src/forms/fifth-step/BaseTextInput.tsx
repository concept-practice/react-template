import React, { useId } from "react";

const BaseTextInput: React.FC<BaseTextInputProperties> = ({
  value,
  label,
  inputType,
  inputValid,
  errors,
  required,
  placeholder,
  minLength = 0,
  handleOnInput,
}) => {
  const Id = useId();

  return (
    <div>
      <label htmlFor={Id}>{label}</label>
      <div>
        <input
          className={inputValid ? "success" : "danger"}
          id={Id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          required={required}
          onInput={handleOnInput}
          minLength={0}
        />
      </div>
      <p className={inputValid ? "" : "text-danger"}>{errors}</p>
    </div>
  );
};

interface BaseTextInputProperties {
  value: string;
  label: string;
  inputType: string;
  inputValid: boolean;
  required: boolean;
  errors: string;
  placeholder: string;
  minLength?: number;
  handleOnInput: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default BaseTextInput;
