import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import AddVehicle from './AddVehicle';
import VehicleDetails from './VehicleDetails';
import VehiclesList from './VehicleList/VehiclesList';
import { Box } from '../../../../../components';


const Stack = createStackNavigator();

const Vehicle = () => {
  return (
   <Box sx={{ flex: 1}}>

<Stack.Navigator initialRouteName="VehiclesList">
      <Stack.Screen name="VehiclesList" component={VehiclesList}
       options={{
        headerShown: false,
      }} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetails}
       options={{
        headerShown: false,
      }} />
            <Stack.Screen name="AddVehicle" component={AddVehicle}
       options={{
        headerShown: false,
      }} />
    </Stack.Navigator>

   </Box>
  )
}

export default Vehicle