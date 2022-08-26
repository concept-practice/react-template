import { ReactNode } from "react";
import IValid from "../fourth-step/IValid";
import useCanSubmit from "./UseCanSubmit";

const Form: React.FC<FormProperties> = ({ children, inputs, submitCallback }: FormProperties) => {
  const canSubmit = useCanSubmit(inputs);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    void submitCallback();

    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {children}
      <div>
        <button disabled={canSubmit} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

interface FormProperties {
  children: ReactNode;
  inputs: Array<IValid>;
  submitCallback: () => void;
}

export default Form;
