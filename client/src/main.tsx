import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root element not found in DOM. Cannot render app.");
}

ReactDOM.createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
