import React from 'react';
import { View, Dimensions } from 'react-native';
import { 
  Box, 
  Center, 
  FormControl, 
  FormControlLabel, 
  FormControlLabelText, 
  Input, 
  InputField, 
  FormControlHelper, 
  FormControlHelperText, 
  FormControlError, 
  FormControlErrorText, 
  Button, 
  ButtonText, 
  Text, 
  ButtonGroup,
  Icon,
  Pressable
} from "../../../components/index";
import { AntDesign } from "@expo/vector-icons"; 
import Logo from '../../../assets/SVG/Logo';

const { width: ww, height: wh } = Dimensions.get("window");

const GoogleIcon = () => {
  return (
    <AntDesign name={"google"} size={ww * 0.06} color="$BottleGray7" /> 
  );
};

const AppleIcon = () => {
  return (
    <AntDesign name={"apple1"} size={ww * 0.06} color="$BottleGray7" /> 
  );
};

const BackIcon = () => {
  return (
    <AntDesign name={"arrowleft"} size={ww * 0.12} color="$BottleGray7" /> 
  );
};


interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <Box flex={1} bg="$BottleGray8">
      <Center style={{ flex: 1 }}> 
        <Box w={ww * 0.9} justifyContent="center" style={{ flex: 1 }}> 
          <FormControl
            px={ww * 0.1}
            py={ww * 0.1}
            borderRadius={12} // Ajustar border radius
            size="md"
            bg="$BottleGray6" // Añadir color de fondo
          >
            <Center pb={12}>
              <Logo size={0.4} fill='white'/>
            </Center>
            
            <Box>
              <FormControlLabel mb="$1">
                <FormControlLabelText color="$BottleGray3">Mail</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  
                  type="text"
                  placeholder="hello@blackbottle.com"
                  placeholderTextColor="$BottleGray3" // Ajustar color del placeholder
                 
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$BottleGray4">
                 Please enter a valid email
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorText color="$BottleError">
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </Box>
            <Box>
              <FormControlLabel mb="$1">
                <FormControlLabelText color="$BottleGray3">Password</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  type="password"
                  placeholder="*****"
                  placeholderTextColor="$BottleGray3" // Ajustar color del placeholder
                 
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$BottleGray4">
                  Must be at least 6 characters.
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorText color="$BottleError">
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </Box>
            <Box>
              <Button
                onPress={() => navigation.navigate("MainStack")}
                my={wh * 0.02} 
                size="lg"
                bg="$BottleGray1" // Añadir color de fondo
              >
                <ButtonText textAlign="center" color="$BottleGray7">Login</ButtonText>
              </Button>
            </Box>
            <Box>
              <ButtonGroup justifyContent="space-between">
                <Button w="48%" h={ww * 0.1} size="lg" bg="$BottleGray4">
                  <Icon as={GoogleIcon} />
                </Button>
                <Button w="48%" h={ww * 0.1} size="lg" bg="$BottleGray4">
                  <Icon as={AppleIcon} />
                </Button>
              </ButtonGroup>
            </Box>
          </FormControl>
        </Box>
      </Center>
      <Center>
        <Pressable
          onPress={() => navigation.goBack()}
          px={ww * 0.03}
          py={ww * 0.02}
          borderRadius="$2xl"
          position="absolute"
          bottom={0}
          mb={wh * 0.1}
          bg="$BottleGray3" // Añadir color de fondo
        >
          <Icon as={BackIcon} />
        </Pressable>
      </Center>
    </Box>
  );
};


export default Login;