import { ThemeProvider } from "@/app/providers";
import "@/app/styles/globals.css";
import "@/app/styles/index.css";
import { NavBar } from "@/shared/widgets/header/ui/navigation";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
