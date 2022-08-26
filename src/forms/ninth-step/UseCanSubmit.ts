import { useEffect, useState } from "react";
import IValid from "./IValid";

export default function useCanSubmit(inputs: Array<IValid>): boolean {
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (inputs.every((input) => input.valid)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputs]);

  return disabled;
}
