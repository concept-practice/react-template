import "../styles/index.scss";
import { useState } from "react";

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <p>Hello There!</p>
      {counter}
      <div>
        <button type="button" onClick={() => setCounter(counter + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default App;
