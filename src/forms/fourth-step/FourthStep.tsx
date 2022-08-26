import { useId } from "react";
import useInput from "../third-step/UseInput";
import useCanSubmit from "./UseCanSubmit";

const FourthStep: React.FC = () => {
  const usernameId = useId();
  const username = useInput();

  const passwordId = useId();
  const password = useInput();

  const canSubmit = useCanSubmit([username, password]);

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
        <button disabled={canSubmit} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FourthStep;
