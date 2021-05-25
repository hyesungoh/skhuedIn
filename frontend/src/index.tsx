import React from "react";
import ReactDOM from "react-dom";

// for Recoil
import { RecoilRoot } from "recoil";

// for styled-components provider
import { ThemeProvider } from "styled-components";

// for react-query provider
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import theme from "style/theme";

import App from "./App";
import "style/index.scss";

const queryClient = new QueryClient();

ReactDOM.render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App />,
                <ReactQueryDevtools />
            </ThemeProvider>
        </QueryClientProvider>
    </RecoilRoot>,
    document.getElementById("root")
);
