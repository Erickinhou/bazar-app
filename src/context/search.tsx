import { createContext, useContext, useState } from "react";

const SearchContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined);

interface CounterProviderProps {
  children: React.ReactNode;
}

export const SearchProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  const searchState = useState("");
  return (
    <SearchContext.Provider value={searchState}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
