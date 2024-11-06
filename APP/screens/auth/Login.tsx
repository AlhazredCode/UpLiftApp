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
import { useColors } from '../../context/UseColors';

const { width: ww, height: wh } = Dimensions.get("window");

const GoogleIcon = () => {
  const colors = useColors();
  return (
    <AntDesign name={"google"} size={ww * 0.06} color={colors.UpSecondary400} /> 
  );
};

const AppleIcon = () => {
  const colors = useColors();
  return (
    <AntDesign name={"apple1"} size={ww * 0.06} color={colors.UpSecondary400} /> 
  );
};

const BackIcon = () => {
  const colors = useColors();
  return (
    <AntDesign name={"arrowleft"} size={ww * 0.12} color={colors.UpPrimary500}/> 
  );
};


interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <Box flex={1} bg="$UpBackground100">
      <Center style={{ flex: 1 }}> 
        <Box w={ww * 0.9} justifyContent="center" style={{ flex: 1 }}> 
          <FormControl
            px={ww * 0.1}
            py={ww * 0.1}
            borderRadius={12} // Ajustar border radius
            size="md"
            bg="$UpBackground400" // Añadir color de fondo
          >
            <Center pb={12}>
              <Logo size={1} fill='white'/>
            </Center>
            
            <Box>
              <FormControlLabel mb="$1">
                <FormControlLabelText color="$UpPrimary500">Mail</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  
                  type="text"
                  placeholder="hello@uplift.com"
                  placeholderTextColor="$UpSecondary500" // Ajustar color del placeholder
                 
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$UpPrimary500">
                 Please enter a valid email
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorText color="$UpPrimary500">
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </Box>
            <Box>
              <FormControlLabel mb="$1">
                <FormControlLabelText color="$UpPrimary500">Password</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  type="password"
                  placeholder="*****"
                  placeholderTextColor="$UpSecondary500" // Ajustar color del placeholder
                 
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$UpPrimary500">
                  Must be at least 6 characters.
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorText color="$UpPrimary500">
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </Box>
            <Box>
              <Button
                onPress={() => navigation.navigate("MainStack")}
                my={wh * 0.02} 
                size="lg"
                bg="$UpPrimary" // Añadir color de fondo
              >
                <ButtonText textAlign="center" color="$UpPrimary500">Login</ButtonText>
              </Button>
            </Box>
            <Box>
              <ButtonGroup justifyContent="space-between">
                <Button w="48%" h={ww * 0.1} size="lg" variant='outline'>
                  <Icon as={GoogleIcon} />
                </Button>
                <Button w="48%" h={ww * 0.1} size="lg" variant='outline'>
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
          bg="$UpPrimary" // Añadir color de fondo
        >
          <Icon as={BackIcon} />
        </Pressable>
      </Center>
    </Box>
  );
};


export default Login;