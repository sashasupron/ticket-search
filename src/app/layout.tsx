"use client";
import "./globals.css";

import "@/components/App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

import NavBar from "@/components/navigation/navigation";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
