import BaseTextInput from "./BaseTextInput";
import IUseInput from "./IUseInput";

const EmailInput: React.FC<EmailInputProperties> = ({ useInput }: EmailInputProperties) => {
  return (
    <BaseTextInput
      inputType={"email"}
      placeholder={"Email"}
      value={useInput.value}
      label={"Email:"}
      inputValid={useInput.valid}
      errors={useInput.errors}
      handleOnInput={useInput.handleOnInput}
      required
    />
  );
};

export interface EmailInputProperties {
  useInput: IUseInput;
}

export default EmailInput;
