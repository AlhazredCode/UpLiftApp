import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import Account from "./drawer/Account";
import UpMain from "./UpMain";
import Help from "./drawer/Help";
import Locations from "./drawer/Locations";
import Membership from "./drawer/Membership";
import Notifications from "./drawer/Notifications";
import Vehicle from "./drawer/Vehicle";
import Book from "./drawer/Book";

// Importa los componentes desde la carpeta drawer (asegúrate de que existan)

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
        name="UpMain"
        component={UpMain}
        options={{
          header: () => <CustomHeader typeNavigation={"primary"} />,
          drawerLabel: "Dashboard",
          drawerIcon: () => (
            <AntDesign name="dashboard" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Membership"
        component={Membership}
        options={{
          drawerLabel: "Main Menu",
          drawerIcon: () => <AntDesign name="book" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Book"
        component={Book}
        options={{
          drawerLabel: "Barlog",
          drawerIcon: () => <AntDesign name="book" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerLabel: "Orders",
          drawerIcon: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Vehicle"
        component={Vehicle}
        options={{
          drawerLabel: "Guests",
          drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Locations"
        component={Locations}
        options={{
          drawerLabel: "Invoice Scanner",
          drawerIcon: () => <AntDesign name="scan1" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerLabel: "Bar Health",
          drawerIcon: () => <AntDesign name="heart" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
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
