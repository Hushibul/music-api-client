import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import AudioProvider from "./context/AudioContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <AudioProvider>
        <App />
    </AudioProvider>
);
