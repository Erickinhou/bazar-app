import { StatusBar } from "expo-status-bar";
import { Navigation } from "./src/navigation";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
      <Toast />
    </>
  );
}
