import { render } from "react-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <SearchParams />
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
