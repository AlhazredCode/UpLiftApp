import { View, Text, Dimensions } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import Account from "./drawer/Account";
import UpMain from "./UpMain";
import Help from "./drawer/Help";
import Locations from "./drawer/Locations";
import Membership from "./drawer/Membership";
import Notifications from "./drawer/Notifications";
import Vehicle from "./drawer/Vehicle";
import Book from "./drawer/Book";
import { useColors } from "../../context/UseColors";
import { Box } from "../../../components";
import { Image } from "../../../components";

// Importa los componentes desde la carpeta drawer (asegúrate de que existan)

import CustomHeader from "../../component/CustomHeader";





const Drawer = createDrawerNavigator();
const Home = () => {
  const { width: ww, height: wh } = Dimensions.get("window");
  const colors = useColors();

  return (
    <Drawer.Navigator
    drawerContent={(props)=> {

      return (
        <>
          <Box sx={{ height: wh * 0.2}}>

          </Box>
          <DrawerItemList   {...props} />
        </>
      )
    } }
    screenOptions={{
      drawerStyle: {
        zIndex: 10,
        width: ww * 0.725,
        backgroundColor: colors.UpSecondary,
        
      },
      
      
      drawerLabelStyle: {
        color:  colors.UpSecondary500, 
      },
      drawerType: 'slide',
      drawerActiveTintColor: colors.UpSecondary100,
    }}
    >
      <Drawer.Screen
        name="UpMain"
        component={UpMain}
        options={{
          header: () => <CustomHeader typeNavigation={"primary"} />,
          drawerLabel: "Dashboard",
          drawerIcon: () => (
            <AntDesign name="dashboard" size={24} color={colors.UpSecondary400} />
          ),
        }}
      />
      <Drawer.Screen
        name="Membership"
        component={Membership}
        options={{
          drawerLabel: "Membership",
          drawerIcon: () => <AntDesign name="Safety" size={24} color={colors.UpSecondary400} />,
        }}
      />
      <Drawer.Screen
        name="Book"
        component={Book}
        options={{
          drawerLabel: "Book",
          drawerIcon: () => <AntDesign name="book" size={24} color={colors.UpSecondary400} />,
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerLabel: "Notifications",
          drawerIcon: () => (
            <AntDesign name="notification" size={24} color={colors.UpSecondary400} />
          ),
        }}
      />
      <Drawer.Screen
        name="Vehicle"
        component={Vehicle}
        options={{
          drawerLabel: "Vehicle",
          drawerIcon: () => <AntDesign name="car" size={24} color={colors.UpSecondary400} />,
        }}
      />
      <Drawer.Screen
        name="Locations"
        component={Locations}
        options={{
          drawerLabel: "Locations",
          drawerIcon: () => <AntDesign name="shrink" size={24} color={colors.UpSecondary400} />,
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerLabel: "Account",
          drawerIcon: () => <AntDesign name="user" size={24} color={colors.UpSecondary400} />,
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerLabel: "Help",
          drawerIcon: () => (
            <AntDesign name="questioncircleo" size={24} color={colors.UpSecondary400} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default Home;
