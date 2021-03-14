import { render } from "react-dom";
import { StrictMode } from "react";

const App = () => {
  return (
    <div>
      <h1>React App</h1>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
