import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainRouter } from "./routes/router.tsx";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.Fragment>
        <Provider store={store}>
            <MainRouter />
        </Provider>
    </React.Fragment>
);
