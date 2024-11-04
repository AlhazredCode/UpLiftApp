import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./APP/navigation/index";
import { NavigationContainer } from "@react-navigation/native";
import { GluestackUIProvider } from './components/index'
import ThemeContextComponent from "./APP/context/ThemeContext";

export default function App() {
  return (
    <ThemeContextComponent.Provider> 
      <GluestackUIProvider colorMode={ThemeContextComponent.useTheme().colorMode}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </GluestackUIProvider>
    </ThemeContextComponent.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});