import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Build from "./Build";
import Chat from "./Chat";
import History from "./History";
import Par from "./Par";
import Vendors from "./Vendors";
const Tab = createMaterialTopTabNavigator();
const OrdersPage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Build" component={Build} />
      <Tab.Screen name="Par" component={Par} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Vendors" component={Vendors} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OrdersPage;
