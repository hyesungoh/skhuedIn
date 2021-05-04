import React from "react";
import ReactDOM from "react-dom";

// for redux providers
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "modules/index";

// for styled-components provider
import { ThemeProvider } from "styled-components";

// for react-query provider
import { QueryClientProvider, QueryClient } from "react-query";

import theme from "style/theme";

import App from "./App";
import "style/index.scss";

const store = createStore(rootReducer);
const queryClient = new QueryClient();

ReactDOM.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App />,
            </ThemeProvider>
        </QueryClientProvider>
    </Provider>,
    document.getElementById("root")
);
