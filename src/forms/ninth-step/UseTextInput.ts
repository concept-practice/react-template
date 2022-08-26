import IUseInput from "./IUseInput";
import useInput from "./UseInput";

export default function useTextInput(initial = ""): IUseInput<string> {
  return useInput(initial, (x) => x);
}
