import 'react-native-gesture-handler';
import Toast from "react-native-toast-message";
import { ContextProvider } from "./src/context";
import { StatusBar } from "expo-status-bar";
import { Navigation } from "./src/navigation";

export default function App() {
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
