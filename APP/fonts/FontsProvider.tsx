import React, { useState, useEffect, createContext, useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import loadFonts from "./fonts";

interface FontContextType {
  fontsLoaded: boolean;
}

const FontContext = createContext<FontContextType>({ fontsLoaded: false });

interface FontsProviderProps {
  children: React.ReactNode;
}

export const FontsProvider: React.FC<FontsProviderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadAppResources() {
      try {
        await loadFonts();
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error(error);
      }
    }

    loadAppResources();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontsContext = () => useContext(FontContext);