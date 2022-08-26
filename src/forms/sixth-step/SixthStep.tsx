import useInput from "./UseInput";
import BaseTextInput from "./BaseTextInput";
import Form from "./Form";

const SixthStep: React.FC = () => {
  const username = useInput();
  const password = useInput();

  const submitCallback = (): void => {
    console.log(`submitting ${username.value} ${password.value}`);

    return;
  };

  return (
    <Form inputs={[username, password]} submitCallback={submitCallback}>
      <BaseTextInput
        inputType={"email"}
        placeholder={"Email"}
        value={username.value}
        label={"Email:"}
        inputValid={username.valid}
        errors={username.errors}
        handleOnInput={username.handleOnInput}
        required
      />
      <BaseTextInput
        inputType={"password"}
        placeholder={"Password"}
        value={password.value}
        label={"Password:"}
        inputValid={password.valid}
        errors={password.errors}
        handleOnInput={password.handleOnInput}
        required
        minLength={8}
      />
    </Form>
  );
};

export default SixthStep;
