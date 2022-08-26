import { useId, useState, useEffect } from "react";
import useInput from "./UseInput";

const ThirdStep: React.FC = () => {
  const usernameId = useId();
  const username = useInput();

  const passwordId = useId();
  const password = useInput();

  useEffect(() => {
    if (username.valid && password.valid) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [username.valid, password.valid]);

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
            className={username.valid ? "success" : "danger"}
            id={usernameId}
            type={"email"}
            placeholder="Email"
            value={username.value}
            onInput={username.handleOnInput}
            required
          />
        </div>
        <p className={username.valid ? "" : "text-danger"}>{username.errors}</p>
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <div>
          <input
            className={password.valid ? "success" : "danger"}
            id={passwordId}
            type={"password"}
            value={password.value}
            onInput={password.handleOnInput}
            required
            minLength={8}
          />
        </div>
        <p className={password.valid ? "" : "text-danger"}>{password.errors}</p>
      </div>
      <div>
        <button disabled={submitDisabled} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ThirdStep;
