"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry, { GlobalStyle, theme } from "../styles";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};
export default RootProvider;
