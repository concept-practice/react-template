import BaseTextInput from "./BaseTextInput";
import IUseInput from "./IUseInput";

const NumberInput: React.FC<NumberInputProperties> = ({
  useInput,
  placeholder,
  label,
  min = 0,
}: NumberInputProperties) => {
  return (
    <BaseTextInput
      inputType={"number"}
      placeholder={placeholder}
      value={useInput.value}
      label={label}
      inputValid={useInput.valid}
      errors={useInput.errors}
      handleOnInput={useInput.handleOnInput}
      required
      minLength={0}
      min={min}
    />
  );
};

interface NumberInputProperties {
  useInput: IUseInput<number>;
  placeholder: string;
  label: string;
  min?: number;
}

export default NumberInput;
