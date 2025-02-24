"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

// Create a client
const queryClient = new QueryClient();

export interface QueryClientProviderProps {
  children: React.ReactNode;
}

export const TanstackQueryClientProvider: FC<QueryClientProviderProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
