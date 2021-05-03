import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            white: string;
            background: string;
            emph: string;
            bold: string;
        };
        shadows: {
            normal: string;
            strong: string;
        };
        border_intensity: string;
        layout_padding: string;
    }
}
