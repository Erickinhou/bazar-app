import React from "react";
import { SearchProvider } from "./search";
import { UserProvider } from "./user";

interface ContextProviderProps {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  return (
    <UserProvider>
      <SearchProvider>{children}</SearchProvider>
    </UserProvider>
  );
};
