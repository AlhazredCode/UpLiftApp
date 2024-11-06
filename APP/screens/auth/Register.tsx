import React, { useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import {
  Box,
  Icon,
  Input,
  InputField,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
  Center,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
  Pressable,
} from "../../../components/index";
import PagerView from 'react-native-pager-view';
import Logo from '../../../assets/SVG/Logo';
const { width: ww, height: wh } = Dimensions.get("window");
import { useColors } from '../../context/UseColors';



const BackIcon = () => {
  const colors = useColors();
  return (
    <AntDesign name={"arrowleft"} size={ww * 0.12} color={colors.UpPrimary500}/>
  );
};

interface RegisterProps {
  navigation: any;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const pagerRef = useRef<PagerView>(null);

  const handleNextPage = () => {
    pagerRef.current?.setPage(1);
  };

  const handlePreviousPage = () => {
    pagerRef.current?.setPage(0);
  };

  return (
    <Box flex={1} bg='$UpBackground100'>
      <Center flex={1}>
        <Box w={ww * 0.9} h={wh * 0.55} justifyContent="center" bg='$UpBackground400' rounded={12}>
          <FormControl
            h='100%'
            px={ww * 0.1}
            py={ww * 0.1}
            borderRadius={ww * 0.025}
            size="md"
          >
            <Center pb={12}>
              <Logo size={1} fill='white' />
            </Center>
            <Box height={wh * 0.375} width={ww * 0.7}>
              <PagerView style={{ flex: 1 }} initialPage={0} ref={pagerRef}>

                <Box key="1" p="$4">
                  <FormControl>
                  <Box>
              <FormControlLabel mb="$1">
                <FormControlLabelText color="$UpPrimary500">Phone</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  
                  type="text"
                  placeholder="+1 000 000"
                  placeholderTextColor="$UpSecondary500" // Ajustar color del placeholder
                 
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$UpBackground400">
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
                <FormControlLabelText color="$UpPrimary500">Name</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  
                  type="text"
                  placeholder="Up Doe"
                  placeholderTextColor="$UpSecondary500" // Ajustar color del placeholder
                 
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$UpBackground400">
                 Please enter your full name
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
                <FormControlLabelText color="$UpPrimary500">ID Number</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  
                  type="text"
                  placeholder="000 000 000 000 "
                  placeholderTextColor="$UpSecondary500" // Ajustar color del placeholder
                 
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$UpBackground400">
                 Please enter your legal ID
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorText color="$UpPrimary500">
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </Box>
                  </FormControl>
                 
                  <Button
                    onPress={handleNextPage}
                    size="lg"
                    
                    mt='auto'
                    variant='outline'
                  >
                    <ButtonText textAlign="center" color="$UpSecondary400">Next</ButtonText>
                  </Button>
                </Box>


                <Box key="2" p="$4">
                <FormControl>
                  <Box>
              <FormControlLabel mb="$1">
                <FormControlLabelText color="$UpPrimary500">User Name</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  
                  type="text"
                  placeholder="Jhon_Car"
                  placeholderTextColor="$UpSecondary500" // Ajustar color del placeholder
                 
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$UpBackground400">
                 Please enter a valid phone Number
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorText color="$UpError">
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
                <FormControlHelperText color="$UpBackground400">
                 Please enter a valid email
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorText color="$UpPrimary400">
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </Box>
            <Box>
              <FormControlLabel mb="$1">
                <FormControlLabelText color="$UpPrimary500">Re-enter Password</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  
                type="password"
                  placeholder="*****"
                  placeholderTextColor="$UpSecondary500" // Ajustar color del placeholder
                 
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$UpBackground400">
                 Please enter a valid email
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorText color="$UpError">
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </Box>
                  </FormControl>
                  <ButtonGroup justifyContent="space-between"   mt='auto'>
                    <Button w="48%" h={ww * 0.1} size="lg" onPress={handlePreviousPage} variant='outline' borderColor='$UpPrimary400'>
                      <ButtonText textAlign="center" color="$UpPrimary400">Back</ButtonText>
                    </Button>
                    <Button w="48%" h={ww * 0.1} size="lg" onPress={handleNextPage} variant='outline'>
                      <ButtonText textAlign="center" color="$UpSecondary400">Next</ButtonText>
                    </Button>
                  </ButtonGroup>
                </Box>


                <Box key="3" p="$4">
                  <FormControl>
                    <FormControlLabel mb="$2">
                      <FormControlLabelText color="$UpPrimary200">
                        <Text>Confirm Password</Text>
                      </FormControlLabelText>
                    </FormControlLabel>
                    <Input variant="underlined">
                      <InputField
                        type="password"
                        placeholder="*****"
                        placeholderTextColor="$UpPrimary400"
                      />
                    </Input>
                  </FormControl>
                  <ButtonGroup justifyContent="space-between">
                    <Button w="48%" h={ww * 0.1} size="lg" onPress={handlePreviousPage} bg="$UpPrimary200">
                      <ButtonText textAlign="center" color="$UpBackground200">Back</ButtonText>
                    </Button>
                    <Button w="48%" h={ww * 0.1} size="lg" onPress={() => navigation.navigate("MainStack")} bg="$UpPrimary300">
                      <ButtonText textAlign="center" color="$UpPrimary200">Create</ButtonText>
                    </Button>
                  </ButtonGroup>
                </Box>
              </PagerView>
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
          bg="$UpPrimary100" // Añadir color de fondo
        >
          <Icon as={BackIcon} />
        </Pressable>
      </Center>
    </Box>
  );
};


export default Register; 