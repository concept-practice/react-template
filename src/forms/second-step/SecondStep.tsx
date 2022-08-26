import { useEffect, useId, useState } from "react";

const SecondStep: React.FC = () => {
  const usernameId = useId();
  const [username, setUsername] = useState<string>("");
  const [usernameValid, setUsernameValid] = useState<boolean>(false);
  const [usernameErrors, setUsernameErrors] = useState<string>("");
  const handleUsernameInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const inputElement = event.target as HTMLInputElement;

    setUsername(inputElement.value);
    setUsernameValid(inputElement.validity.valid);
    setUsernameErrors(inputElement.validationMessage);
  };

  const passwordId = useId();
  const [password, setPassword] = useState<string>("");
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [passwordErrors, setPasswordErrors] = useState<string>("");
  const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const inputElement = event.target as HTMLInputElement;

    setPassword(inputElement.value);
    setPasswordValid(inputElement.validity.valid);
    setPasswordErrors(inputElement.validationMessage);
  };

  useEffect(() => {
    if (usernameValid && passwordValid) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [usernameValid, passwordValid]);

  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log(`Submitting data: ${username} - ${password}`);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor={usernameId}>Email:</label>
        <div>
          <input
            className={usernameValid ? "success" : "danger"}
            id={usernameId}
            type={"email"}
            placeholder="Email"
            value={username}
            onInput={handleUsernameInput}
            required
          />
        </div>
        <p className={usernameValid ? "" : "text-danger"}>{usernameErrors}</p>
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <div>
          <input
            className={passwordValid ? "success" : "danger"}
            id={passwordId}
            type={"password"}
            value={password}
            onInput={handlePasswordInput}
            required
            minLength={8}
          />
        </div>
        <p className={passwordValid ? "" : "text-danger"}>{passwordErrors}</p>
      </div>
      <div>
        <button disabled={submitDisabled} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SecondStep;
