import React, { useEffect, useId, useState } from "react";

const BaseTextInput: React.FC<BaseTextInputProperties> = ({
  value,
  label,
  inputType,
  inputValid,
  errors,
  required,
  placeholder,
  minLength = 0,
  min = 0,
  handleOnInput,
}) => {
  const Id = useId();

  const [dirty, setDirty] = useState<boolean>(false);
  const [dirtyValid, setDirtyValid] = useState<boolean>(true);

  useEffect(() => {
    if (dirty && !inputValid) {
      setDirtyValid(false);
    } else {
      setDirtyValid(true);
    }
  }, [dirty, inputValid]);

  return (
    <div>
      <label htmlFor={Id}>{label}</label>
      <div>
        <input
          className={dirtyValid ? "success" : "danger"}
          id={Id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          required={required}
          onInput={(event): void => {
            handleOnInput(event);
            setDirty(true);
          }}
          onFocus={(event): void => {
            handleOnInput(event);
            setDirty(true);
          }}
          minLength={minLength}
          min={min}
        />
      </div>
      <p className={dirtyValid ? "" : "text-danger"}>{errors}</p>
    </div>
  );
};

interface BaseTextInputProperties {
  value: string | number;
  label: string;
  inputType: string;
  inputValid: boolean;
  required: boolean;
  errors: string;
  placeholder: string;
  minLength?: number;
  min?: number;
  handleOnInput: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default BaseTextInput;
