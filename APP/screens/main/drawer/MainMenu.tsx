import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MainMenuPage from "../../../views/mainmenu";
const MainMenu = () => {
  return (
    <View style={styles.container}>
      <MainMenuPage />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MainMenu;
