import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./theme.css";
import { SessionProvider } from "./context/session.jsx";
import { InfoProvider } from "./context/info.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <SessionProvider>
        <InfoProvider>
            <App />
        </InfoProvider>
    </SessionProvider>
);
