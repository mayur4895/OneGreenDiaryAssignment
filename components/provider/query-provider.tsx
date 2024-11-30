// components/Providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 
 
import React from "react";
import ModalProvider from "./modal-provider";
 

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
  
      <QueryClientProvider client={queryClient}> 
  
      {children}
      <ModalProvider />
      </QueryClientProvider>
    
 
  );
}
