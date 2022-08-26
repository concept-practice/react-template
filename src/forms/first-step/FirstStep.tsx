import React, { useId, useState } from "react";

const FirstStep: React.FC = () => {
  const usernameId = useId();
  const [username, setUsername] = useState<string>("");
  const handleUsernameInput = (event: React.FormEvent<HTMLInputElement>): void => {
    setUsername((event.target as HTMLInputElement).value);
  };

  const passwordId = useId();
  const [password, setPassword] = useState<string>("");
  const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>): void => {
    setPassword((event?.target as HTMLInputElement).value);
  };

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
            id={usernameId}
            type={"email"}
            placeholder="Email"
            value={username}
            onInput={handleUsernameInput}
          />
        </div>
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <div>
          <input id={passwordId} type={"password"} value={password} onInput={handlePasswordInput} />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FirstStep;
