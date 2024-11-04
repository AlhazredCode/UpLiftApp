import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";

// Importa los componentes desde la carpeta drawer (asegúrate de que existan)
import MainMenu from "./drawer/MainMenu";
import Orders from "./drawer/Orders";
import Dashboard from "./drawer/Dashboard";
import Barlog from "./drawer/Barlog";
import Guests from "./drawer/Guests";
import InvoiceScanner from "./drawer/InvoiceScanner";
import BarHealth from "./drawer/BarHealth";
import Sales from "./drawer/Sales";
import CustomHeader from "../../component/CustomHeader";
const Drawer = createDrawerNavigator();
const Home = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        zIndex: 10,
        backgroundColor: "black",
       
       
      },

   
      drawerActiveTintColor: 'gray',
    }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          header: () => <CustomHeader typeNavigation={"primary"} />,
          drawerLabel: "Dashboard",
          drawerIcon: () => (
            <AntDesign name="dashboard" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="MainMenu"
        component={MainMenu}
        options={{
          drawerLabel: "Main Menu",
          drawerIcon: () => <AntDesign name="book" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Barlog"
        component={Barlog}
        options={{
          drawerLabel: "Barlog",
          drawerIcon: () => <AntDesign name="book" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerLabel: "Orders",
          drawerIcon: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Guest"
        component={Guests}
        options={{
          drawerLabel: "Guests",
          drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="InvoiceScanner"
        component={InvoiceScanner}
        options={{
          drawerLabel: "Invoice Scanner",
          drawerIcon: () => <AntDesign name="scan1" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="BarHealth"
        component={BarHealth}
        options={{
          drawerLabel: "Bar Health",
          drawerIcon: () => <AntDesign name="heart" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Sales"
        component={Sales}
        options={{
          drawerLabel: "Sales",
          drawerIcon: () => (
            <AntDesign name="linechart" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default Home;
