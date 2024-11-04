import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/auth/Login";
import Register from "../../screens/auth/Register";
import Welcome from "../../screens/auth/Welcome";
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome}
         options={{
          headerShown: false,
        }}
         />
      <Stack.Screen name="Login" component={Login} 
         options={{
          headerShown: false,
        }}
        />
      <Stack.Screen name="Register" component={Register} 
         options={{
          headerShown: false,
        }}
        />
    </Stack.Navigator>
  );
};
export default AuthStack;
