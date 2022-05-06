import { useState } from "react";

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <p>Hello There!</p>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
};

export default App;
