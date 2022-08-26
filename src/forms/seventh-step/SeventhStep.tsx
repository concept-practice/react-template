import useInput from "./UseInput";
import Form from "./Form";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const SeventhStep: React.FC = () => {
  const username = useInput();
  const password = useInput();

  const submitCallback = (): void => {
    console.log(`submitting ${username.value} ${password.value}`);

    return;
  };

  return (
    <Form inputs={[username, password]} submitCallback={submitCallback}>
      <EmailInput useInput={username} />
      <PasswordInput useInput={password} />
    </Form>
  );
};

export default SeventhStep;
