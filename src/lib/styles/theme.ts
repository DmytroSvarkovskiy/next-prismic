// create your theme
export const theme = {
  white: "#ffffff",
  primaryBlue: "#2C75C8",
  colorText: "#333333",
  errorRed: "#DD1919",
};

// typing theme
declare module "styled-components" {
  export interface DefaultTheme {
    white: string;
    primaryBlue: string;
    colorText: string;
    errorRed: string;
  }
}
