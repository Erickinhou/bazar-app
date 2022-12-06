import 'react-native-gesture-handler';
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage/';
import { ContextProvider } from "./src/context";
import { StatusBar } from "expo-status-bar";
import { Navigation } from "./src/navigation";
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    try {
      AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }, [])
  
  return (
    <>
      <ContextProvider>
        <Navigation />
        <StatusBar style="auto" />
        <Toast />
      </ContextProvider>
    </>
  );
}
