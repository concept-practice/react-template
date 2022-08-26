import IUseInput from "./IUseInput";
import useInput from "./UseInput";

export default function useNumberInput(initial = 0): IUseInput<number> {
  return useInput(initial, (x) => Number.parseInt(x));
}
