import 'react-native-gesture-handler';
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage/';
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Raleway_400Regular } from '@expo-google-fonts/raleway';

import { ContextProvider } from "./src/context";
import { Navigation } from "./src/navigation";

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const customFonts = {
    Raleway_400Regular
  };

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    try {
      AsyncStorage.clear();
      loadFontsAsync();
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    fontsLoaded && ( 
      <> 
        <ContextProvider>
          <Navigation />
          <StatusBar style="auto" />
          <Toast />
        </ContextProvider>
      </>
    )
  );
}
