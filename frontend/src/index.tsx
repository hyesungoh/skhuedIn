import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "modules/index";
import { ThemeProvider } from "styled-components";

import theme from "style/theme";

import App from "./App";
import "style/index.scss";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />,
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
