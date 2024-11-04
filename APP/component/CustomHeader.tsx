import React from 'react';
import { Dimensions } from 'react-native';
import {
  Box,
  HStack,
  Icon,
  Avatar,
  Text,
  VStack,
  Pressable
} from "../../components/index";
import { AntDesign } from "@expo/vector-icons";
import AppLogo from '../../assets/SVG/AppLogo';
import { useNavigation } from '@react-navigation/native';


const { width: ww, height: wh } = Dimensions.get("window");

const MenuIcon = () => {
  return (
    <AppLogo size={0.2} fill='white' />
  );
};

const BackIcon = () => {
  return (
    <AntDesign name={"arrowleft"} size={ww * 0.08} color="$BottleGray7" />
  );
};

interface CustomHeaderProps {
  typeNavigation: "primary" | "secondary";
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ typeNavigation }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    if (typeNavigation === 'primary') {
        (navigation as any).openDrawer();// o la acción que corresponda para el menú
    } else if (typeNavigation === 'secondary') {
      navigation.goBack();
    }
  };

  return (
    <Box
      bg="$BottleGray8"
      px="$4"
      py="$2"
      borderBottomWidth={1}
      borderBottomColor="$BottleGray7"
      pt={wh * 0.05} // Agregar margen superior
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Pressable onPress={handleNavigation}>
          {typeNavigation === "primary" ? (
            <Icon as={MenuIcon} />
          ) : (
            <Icon as={BackIcon} />
          )}
        </Pressable>

        <HStack alignItems="center" space='md'>
          <Text fontSize="$md" color="$BottleGray2" fontWeight="bold">Restaurant Name</Text>
          <Avatar
            size="md"
           
            mt="$1"
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default CustomHeader;