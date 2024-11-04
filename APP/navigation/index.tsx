import React from "react";
import MainStack from "./stacks/MainStack";
import AuthStack from "./stacks/AuthStack";
import { createStackNavigator } from "@react-navigation/stack";
export default function Navigation() {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="AuthStack">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={AuthStack}
          name="AuthStack"
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MainStack"
          component={MainStack}
        />
      </Stack.Navigator>
    </>
  );
}
