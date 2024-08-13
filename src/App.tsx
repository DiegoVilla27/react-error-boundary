import { useState } from "react";
import ErrorBoundary from "./components/error"; // Asegúrate de importar el ErrorBoundary

function MyComponent() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error("Deliberate Error"); // Provoca un error intencionado
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>My Application</h1>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
