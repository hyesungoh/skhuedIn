import { DefaultTheme } from "styled-components";

const colors = {
    white: "#f6f5f5",
    background: "#d3e0ea",
    emph: "#1687a7",
    bold: "#276678",
};

const shadows = {
    normal: "0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.18)",
    strong: "0 19px 38px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.1)",
};

const theme: DefaultTheme = {
    colors,
    shadows,
    border_intensity: "20px",
    layout_padding: "0px 6vw",
};

export default theme;
