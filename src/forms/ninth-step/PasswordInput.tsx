import BaseTextInput from "./BaseTextInput";
import IUseInput from "./IUseInput";

const PasswordInput: React.FC<PasswordInputProperties> = ({
  useInput,
}: PasswordInputProperties) => {
  return (
    <BaseTextInput
      inputType={"password"}
      placeholder={"Password"}
      value={useInput.value}
      label={"Password:"}
      inputValid={useInput.valid}
      errors={useInput.errors}
      handleOnInput={useInput.handleOnInput}
      required
      minLength={8}
    />
  );
};

interface PasswordInputProperties {
  useInput: IUseInput<string>;
}

export default PasswordInput;
