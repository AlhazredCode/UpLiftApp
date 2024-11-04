import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/main/Home";
import Settings from "../../screens/main/Settings";
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}
       options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Settings" component={Settings}
       options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  );
};
export default MainStack;
