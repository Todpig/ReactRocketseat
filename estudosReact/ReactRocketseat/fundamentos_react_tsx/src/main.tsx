import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

//pega o elemento no caso abaaixo root, e exibe em tela o que esta na funçao app importada acima
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
