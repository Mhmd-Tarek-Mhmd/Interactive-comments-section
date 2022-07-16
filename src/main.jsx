import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "./context";

import Modal from "./components/Modal";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
      <Modal />
    </Provider>
  </React.StrictMode>
);
