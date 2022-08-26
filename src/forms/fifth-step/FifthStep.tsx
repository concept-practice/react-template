import useInput from "../third-step/UseInput";
import BaseTextInput from "./BaseTextInput";
import useCanSubmit from "./UseCanSubmit";

const FifthStep: React.FC = () => {
  const username = useInput();

  const password = useInput();

  const canSubmit = useCanSubmit([username, password]);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log(`Submitting data: ${username} - ${password}`);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
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
      <div>
        <button disabled={canSubmit} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FifthStep;
