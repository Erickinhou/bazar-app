import React from "react";
import { SearchProvider } from "./search";

interface ContextProviderProps {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  return <SearchProvider>{children}</SearchProvider>;
};
