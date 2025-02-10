"use client";
import {
  createTheme,
  ThemeProvider as ThemeProviderMUI,
} from "@mui/material/styles";
import { FC, ReactNode } from "react";

interface ThemeProviderProps {
  readonly children: ReactNode;
}

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>;
};
