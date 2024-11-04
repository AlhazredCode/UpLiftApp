import { View, Text, StyleSheet } from "react-native";
import React from "react";
import OrdersPage from "../../../views/orders";
const Orders = () => {
  return (
    <View style={styles.container}>
      <OrdersPage />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Orders;
