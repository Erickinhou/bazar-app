import { createContext, useContext, useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  updatedDate: string;
  createdDate: string;
}

const UserContext = createContext<
  [User, React.Dispatch<React.SetStateAction<User>>] | undefined
>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const userState = useState<User>();
  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context =
    useContext<[User, React.Dispatch<React.SetStateAction<User>>]>(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
