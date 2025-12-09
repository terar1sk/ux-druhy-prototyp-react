import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


// global project styles
import "./styles/pages/style.css";
import "./styles/layout/header.css";
import "./styles/layout/footer.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
