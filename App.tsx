import { Home } from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Navigation } from "./src/navigation";

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
