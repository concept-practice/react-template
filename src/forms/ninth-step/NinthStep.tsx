import Form from "./Form";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import NumberInput from "./NumberInput";
import useTextInput from "./UseTextInput";
import useNumberInput from "./UseNumberInput";

const NInthStep: React.FC = () => {
  const username = useTextInput();
  const password = useTextInput();
  const age = useNumberInput();

  const submitCallback = (): void => {
    console.log(`submitting ${username.value} ${password.value}`);

    return;
  };

  return (
    <Form inputs={[username, password]} submitCallback={submitCallback}>
      <EmailInput useInput={username} />
      <PasswordInput useInput={password} />
      <NumberInput placeholder="Age" label="Age:" useInput={age} />
    </Form>
  );
};

export default NInthStep;
