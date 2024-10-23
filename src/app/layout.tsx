"use client"; 

import { Outlet } from 'react-router-dom';
import "@/app/styles/globals.css";
import React from "react";
import { Providers } from "@/app/providers/providers";
import { NavBar } from "@/widgets/header/ui/navigation";
import "@/app/styles/index.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <React.Fragment>
            <NavBar />
            {children}
          </React.Fragment>
        </Providers>
      </body>
    </html>
  );
}
